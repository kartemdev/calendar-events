import { Calendar } from 'antd';
import { FC } from 'react';
import { IEvent } from '../models/IEvent';
import type { Dayjs } from 'dayjs';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
  onSelect: (value: Dayjs) => void;
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  const dateCellRender = (value: Dayjs) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    );

    return (
      <div>
        {currentDayEvents.map((ev, i) => (
          <div key={i}>-{ev.description}</div>
        ))}
      </div>
    );
  };

  return <Calendar dateCellRender={dateCellRender} onSelect={props.onSelect} />;
};

export default EventCalendar;
