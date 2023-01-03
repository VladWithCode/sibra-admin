import React, { useState } from 'react';
import ErrorScreen from '../../components/Screen/ErrorScreen';
import Screen from '../../components/Screen/Screen';
import ScreenBody from '../../components/Screen/ScreenBody';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import Section from '../../components/Section/Section';
import Spinner from '../../components/UI/Spinner';
import { useDebounce } from '../../hooks/useDebounce';
import { useGetCustomers } from '../../services/customers/useCustomers';

const getFullname = (...args) => args.filter(Boolean).join(' ');

const SearchInput = ({ onChange, value }) => (
  <input
    className="border-2 boder-zinc-200 rounded-full px-4 py-1"
    type="text"
    placeholder="Busca un nombre"
    onChange={onChange}
    value={value}
  />
);

function Customers() {
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const { data, isLoading, isError, error } = useGetCustomers({
    name,
    sort: 'names',
  });
  const onSearchChange = (e) => setSearch(e.target.value);

  useDebounce(
    () => {
      setName(search);
    },
    500,
    [search]
  );

  if (isError) return <ErrorScreen error={error} />;

  return (
    <Screen>
      <ScreenHeader className="justify-between" heading="Clientes">
        <SearchInput onChange={onSearchChange} />
      </ScreenHeader>
      <ScreenBody className="auto-rows-[15rem]" maxCols={3}>
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
                <p className="text-xl mt-auto">
                  {getFullname(
                    customer.names,
                    customer.patLastname,
                    customer.matLastname
                  )}
                </p>
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
