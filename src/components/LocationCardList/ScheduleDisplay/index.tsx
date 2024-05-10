import React from 'react';
import { Schedule } from '@/types/DataAPI';

interface ScheduleDisplayProps {
  schedules?: Schedule[];
}

const ScheduleDisplay: React.FC<ScheduleDisplayProps> = ({ schedules }) => {
  function renderScheduleGroups() {
    if (!schedules) return null;

    return schedules.reduce((scheduleGroups: JSX.Element[], schedule, index) => {
      const scheduleItem = (
        <div key={index}>
          <p className='font-gotham-bold'>{schedule.weekdays}</p>
          <p>{schedule.hour}</p>
        </div>
      );

      if (index % 2 === 0) {
        scheduleGroups.push(
          <div className="flex" key={index}>
            {scheduleItem}
          </div>
        );
      } else {
        const currentGroupIndex = Math.floor(index / 2);
        const currentGroupChildren = React.Children.toArray(scheduleGroups[currentGroupIndex].props.children);
        scheduleGroups[currentGroupIndex] = (
          <div className="flex" key={currentGroupIndex} >
            {currentGroupChildren.concat(scheduleItem)}
          </div>
        );
      }
      return scheduleGroups;
    }, []);
  };

  return renderScheduleGroups();
};

export default ScheduleDisplay;
