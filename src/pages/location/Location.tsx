import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router';
import Slider, { Settings } from 'react-slick';
import { useLocationEvents } from '../../hooks/useLocationEvents';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { useLocations } from '../../hooks/useLocations';
import css from './Location.module.scss';

const settings: Settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: (
    <div>
      <button className={css.arrowRight}> &gt; </button>
    </div>
  ),
  prevArrow: (
    <div>
      <button className={css.arrowLeft}> &lt; </button>
    </div>
  )
};

export const Location = () => {
  const { id } = useParams<{ id: string }>();
  const [value, setValue] = useState<[Date, Date] | null>(null);

  const { data: locations = [] } = useLocations();
  const { data: events = [] } = useLocationEvents(id);

  const filteredEvents = useMemo(() => {
    if (!value) return events;
    return events.filter(el => {
      const isEventAfterStart = new Date(el.startDateUTC).valueOf() - Number(value[0]) >= 0;
      const isEventBeforeEnd = Number(value[1]) - new Date(el.endDateUTC).valueOf() >= 0;
      return isEventAfterStart && isEventBeforeEnd;
    });
  }, [events, value]);

  const location = useMemo(() => {
    return locations.find(el => el.id === id);
  }, [id, locations]);

  return (
    <div className={css.wrapper}>
      <div>
        <div className={css.locationTitle}>{location?.name}</div>
        <div className={css.locationDescription}>{location?.description}</div>
      </div>
      <Slider {...settings}>
        {location?.photos.map(el => (
          <div key={el} className={css.slide}>
            <img src={el} alt='' />
          </div>
        ))}
      </Slider>
      <section>
        <h3 className={css.sectionTitle}>Features:</h3>
        <div className={css.featureList}>
          {location?.features.map(el => (
            <div key={el.label} className={css.featureItem}>
              <img src={el.image} alt='' />
              <span>{el.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className={css.sectionTitle}>Tags:</h3>
        <div className={css.tagList}>
          {location?.tags.map(el => (
            <div key={el.id} className={css.tagItem}>
              <span>#{el.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className={css.sectionTitle}>Contacts:</h3>
        <div className={css.contactList}>
          <a href={location?.contact.website} target='_blank' rel='noreferrer'>
            Website
          </a>
          <a href={`tel:${location?.contact.phones[0]}`}>{location?.contact.phones[0]}</a>
          <a href={`mailto:${location?.contact.email}`}>{location?.contact.email}</a>
        </div>
      </section>

      <section>
        <div className={css.eventsHeader}>
          <h3 className={css.sectionTitle}>Events: </h3>
          <DateRangePicker onChange={setValue} value={value} minDate={new Date()} />
        </div>
        {filteredEvents.length > 0 ? (
          <div className={css.eventList}>
            {filteredEvents.map(el => (
              <div key={el.id} className={css.eventItem}>
                {el.images[0] && <img src={el.images[0]} alt='' />}
                <div className={css.eventName}>{el.name}</div>
                <div>{el.description}</div>
                <div>
                  {el.startDate} - {el.endDate}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No events yet for this location!</div>
        )}
      </section>
    </div>
  );
};
