import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ka';
import 'dayjs/locale/en';
import {DateTemplate} from '@constants';

dayjs.extend(customParseFormat);

const georgianMonths = {
  Jan: 'იან',
  Feb: 'თებ',
  Mar: 'მარ',
  Apr: 'აპრ',
  May: 'მაი',
  Jun: 'ივნ',
  Jul: 'ივლ',
  Aug: 'აგვ',
  Sep: 'სექ',
  Oct: 'ოქტ',
  Nov: 'ნოე',
  Dec: 'დეკ',
};

export const formatDate = (dateString: string) => {
  const day = dayjs(dateString).format(DateTemplate.DD);
  const month = dayjs(dateString).format(
    DateTemplate.MMM,
  ) as keyof typeof georgianMonths;
  const year = dayjs(dateString).format(DateTemplate.YYYY);

  return `${day} ${georgianMonths[month]}, ${year}`;
};
