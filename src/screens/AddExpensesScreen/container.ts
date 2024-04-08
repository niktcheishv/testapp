import {useRef} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {HomeStackRouteProps} from '@navigation/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {Values} from '@constants';
import {useForm} from 'react-hook-form';
import {Expense} from 'screens/CategoryScreen/types';
import {IFormData} from './types';
import {useAppSelector} from '@hooks';

export const useAddExpenses = () => {
  const {currentUserID} = useAppSelector(state => state.global);
  const {params} = useRoute<HomeStackRouteProps<'AddExpensesScreen'>>();
  const {goBack} = useNavigation();
  const {category, isDefault} = params || {};
  const modalRef = useRef<BottomSheetModal>(null);
  const {control, handleSubmit, setValue, watch} = useForm<IFormData>({
    defaultValues: {
      categoryName: category,
      company: '',
      date: '',
      cost: '',
      rate: 0,
      allowingOil: '',
      oilLiter: '',
    },
  });

  const {categoryName, company, date, cost, rate, allowingOil, oilLiter} =
    watch();

  const hasAdditionalFields =
    category === Values.OIL_AND_FILTERS || category === Values.OIL_AND_FILTERS;

  const openCalendarModal = () => {
    modalRef?.current?.present();
  };

  const closeCalendarModal = () => {
    modalRef?.current?.close();
  };

  const setRating = (rating: number) => {
    setValue('rate', rating);
  };

  const selectDate = (dateString: string) => {
    setValue('date', dateString);
  };

  const addExpense = () => {
    if (!currentUserID) {
      return;
    }

    const data: Expense = {
      category: {
        order: 1,
        value: categoryName,
        placeholder: 'კატეგორია',
      },
      company: {
        order: 2,
        value: company,
        placeholder: 'კომპანიის დასახელება',
      },
      cost: {
        order: 3,
        value: cost,
        placeholder: 'ხარჯის ღირებულება (₾)',
      },
      date: {
        order: 6,
        value: date,
        placeholder: 'თარიღი',
      },
      rate: {
        order: 7,
        value: rate,
        placeholder: 'შეფასება',
      },
    };

    if (hasAdditionalFields) {
      data.allowingOil = {
        order: 4,
        value: allowingOil,
        placeholder: 'ზეთის დაშვება (მაგ.: 5x40)',
      };

      data.oilLiter = {
        order: 5,
        value: oilLiter,
        placeholder: 'ზეთის ლიტრაჟი',
      };
    }

    firestore()
      .collection(isDefault ? Values.CATEGORIES : Values.CUSTOM_CATEGORIES)
      .doc(category)
      .collection(currentUserID)
      .add(data)
      .then(() => goBack());
  };

  //   const isDisabled = !(categoryName && company && date && cost && rate);

  return {
    modalRef,
    openCalendarModal,
    closeCalendarModal,
    control,
    handleSubmit,
    setRating,
    selectDate,
    rate,
    date,
    hasAdditionalFields,
    addExpense,
  };
};
