import { Layout, Modal } from 'antd';
import { FC, useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const Event: FC = () => {
  const { fetchGuests, fetchEvents, createEvent, setModalVisible } =
    useActions();

  const { guests, events } = useTypedSelector((store) => store.event);
  const { user } = useTypedSelector((store) => store.auth);
  const { modalVisible } = useTypedSelector((store) => store.modal);

  const [dateForModal, setDateForModal] = useState<Dayjs>(dayjs());
  const [checkChosenDate, setCheckChosenDate] = useState<boolean>(false);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    createEvent(event);
    setModalVisible(false);
    setCheckChosenDate(false);
  };

  const onSelect = (value: Dayjs) => {
    const date: Date = new Date();
    setDateForModal(value);

    if (
      dateForModal?.toDate().getFullYear() === value.toDate().getFullYear() &&
      dateForModal?.toDate().getMonth() === value.toDate().getMonth()
    ) {
      if (
        value.toDate().toLocaleDateString() === date.toLocaleDateString() ||
        value.isAfter(dayjs())
      ) {
        setCheckChosenDate(true);
        setModalVisible(true);
      }
    }
  };

  return (
    <Layout>
      <EventCalendar events={events} onSelect={onSelect} />
      <Modal
        title="Добавить событие"
        open={modalVisible}
        footer={null}
        onCancel={() => {
          setModalVisible(false);
          setCheckChosenDate(false);
        }}
      >
        <EventForm
          guests={guests}
          submit={addNewEvent}
          date={dateForModal}
          check={checkChosenDate}
        />
      </Modal>
    </Layout>
  );
};

export default Event;
