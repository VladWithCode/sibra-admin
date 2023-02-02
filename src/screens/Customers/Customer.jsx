import React from 'react';
import { useParams } from 'react-router-dom';
import FileSection from '../../components/Customers/FileSection';
import RecordListingSection from '../../components/Customers/RecordListingSection';
import PersonalDataSection from '../../components/Customers/PersonalDataSection';
import ErrorScreen from '../../components/Screen/ErrorScreen';
import Screen from '../../components/Screen/Screen';
import ScreenBody from '../../components/Screen/ScreenBody';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import BackBtn from '../../components/UI/BackBtn';
import Spinner from '../../components/UI/Spinner';
import useNavigation from '../../context/navigation/useNavigation';
import { useGetCustomerById } from '../../services/customers/useCustomers';
import Card from '../../components/UI/Card';

function Customer({}) {
  const { id } = useParams();
  const resetLink = useNavigation((state) => state.resetLink);
  const { isLoading, isError, error, data } = useGetCustomerById(id);

  if (isError) return <ErrorScreen error={error} />;

  return (
    <Screen>
      <ScreenHeader
        className="justify-between"
        heading={
          data?.customer.fullName ? data?.customer.fullName : 'Cargando...'
        }
      ></ScreenHeader>
      <ScreenBody className="auto-rows-max text-base font-medium">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <PersonalDataSection customer={data.customer} />
            <RecordListingSection records={data.customer.records} />
            <FileSection files={data.customer.files} />
          </>
        )}
      </ScreenBody>
      <BackBtn to="/customers" onClick={() => resetLink('customersLink')} />
    </Screen>
  );
}

export default Customer;
