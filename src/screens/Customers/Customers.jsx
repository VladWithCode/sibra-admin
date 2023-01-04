import React, { useState } from 'react';
import DebouncedInput from '../../components/Forms/DebouncedInput';
import ErrorScreen from '../../components/Screen/ErrorScreen';
import Screen from '../../components/Screen/Screen';
import ScreenBody from '../../components/Screen/ScreenBody';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import Section from '../../components/Section/Section';
import Spinner from '../../components/UI/Spinner';
import { useGetCustomers } from '../../services/customers/useCustomers';

function Customers() {
  const [search, setSearch] = useState('');
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
              <Section
                headless={true}
                useCard={true}
                cardShadow={true}
                bodyClass="flex flex-col py-6 h-[15rem] font-medium"
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
            ))
          : null}
      </ScreenBody>
    </Screen>
  );
}

export default Customers;
