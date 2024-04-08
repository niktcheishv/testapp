import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

export type DateModalProps = {
  title: string;
  selectedDate: string;
  close: () => void;
  // select: React.Dispatch<React.SetStateAction<string>>;
  select: (dateSting: string) => void;
};

export type DateModalRef = React.RefObject<BottomSheetModalMethods>;
