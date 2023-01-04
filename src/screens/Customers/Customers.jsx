import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DebouncedInput from '../../components/Forms/DebouncedInput';
import ErrorScreen from '../../components/Screen/ErrorScreen';
import Screen from '../../components/Screen/Screen';
import ScreenBody from '../../components/Screen/ScreenBody';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import Section from '../../components/Section/Section';
import Spinner from '../../components/UI/Spinner';
import useNavigation from '../../context/navigation/useNavigation';
import { useGetCustomers } from '../../services/customers/useCustomers';

function Customers() {
  const [search, setSearch] = useState('');
  const setLink = useNavigation((state) => state.setLink);
  const { data, isLoading, isError, error } = useGetCustomers({
    name: search,
    sort: 'names',
  });

  const onChangeCb = (value) => setSearch(value);

  if (isError) return <ErrorScreen error={error} />;

  return (
    <Screen>
      <ScreenHeader className="justify-between" heading="Clientes">
        <DebouncedInput onChangeCb={onChangeCb} placeholder="Busca un nombre" />
      </ScreenHeader>
      <ScreenBody className="auto-rows-[15rem]">
        {isLoading ? <Spinner /> : null}
        {data?.customers
          ? data.customers.map((customer) => (
              <Link
                to={`/customers/${customer._id}`}
                onClick={() =>
                  setLink('customersLink', `/customers/${customer._id}`)
                }
              >
                <Section
                  headless={true}
                  useCard={true}
                  bodyClass="flex flex-col py-6 h-[15rem] font-medium shadow-zinc-200 shadow-md hover:shadow-lg active:shadow-sm"
                  key={customer._id}
                >
                  <p className="text-xs text-zinc-300">{customer.rfc}</p>
                  <p className="text-xs text-zinc-300">{customer.curp}</p>
                  <p className="text-xl mt-auto">{customer.fullName}</p>
                  <p className="text-base text-zinc-500">
                    {customer.phoneNumber}
                  </p>
                  {customer.email ? (
                    <p className="text-sm text-zinc-400">{customer.email}</p>
                  ) : null}
                </Section>
              </Link>
            ))
          : null}
      </ScreenBody>
    </Screen>
  );
}

export default Customers;
