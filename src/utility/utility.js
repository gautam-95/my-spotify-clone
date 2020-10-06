import moment from 'moment';

export const getDisplayTime = (ms) => {
    let duration = moment.duration(ms, 'milliseconds');
    let fromMinutes = Math.floor(duration.asMinutes());
    let fromSeconds = Math.floor(duration.asSeconds() - fromMinutes * 60);
    return Math.floor(duration.asSeconds()) >= 60 ? (fromMinutes<= 9 ? '0'+fromMinutes : fromMinutes) +':'+ (fromSeconds<= 9 ? '0'+fromSeconds : fromSeconds)
  : '00:'+(fromSeconds<= 9 ? '0'+fromSeconds : fromSeconds);
};