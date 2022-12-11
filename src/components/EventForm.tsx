import { Button, DatePicker, Form, Input, message, Row, Select } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/iUser';
import { formatDate } from '../utils/date';
import { rules } from '../utils/rules';
import { Dayjs } from 'dayjs';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs from 'dayjs'

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
  date: Dayjs | null;
  check: boolean;
}

const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  });

  const { user } = useTypedSelector((store) => store.auth);

  const selectDate = (date: Dayjs | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const submitForm = () => {
    props.submit({ ...event, author: user.username });
  };

  useEffect(() => {
    if (props.date) {
      selectDate(props.date);
    }
  }, [props.date]);

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Навзвание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <>
        {props.check ? (
          <Form.Item
            label="Дата события"
            style={{ marginLeft: 9.453 }}
          >
            <div className="chsDate">
              {event.date.split('.').join('-')}
              <CalendarOutlined className="iconDate" />
            </div>
          </Form.Item>
        ) : (
          <Form.Item
            label="Дата события"
            name="date"
            rules={[
              rules.isDateAfter('Невозможно установить прошедшую дату')
            ]}
          >
            <DatePicker onChange={(date) => selectDate(date)} />
          </Form.Item>
        )}
      </>
      <Form.Item label="Выберите гостя" name="guest" rules={[rules.required()]}>
        <Select
          onChange={(guest: string) => setEvent({ ...event, guest })}
          options={props.guests.map((g) => ({
            value: g.username,
            label: g.username,
          }))}
        />
      </Form.Item >
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
