import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ListFilters from '../../components/Lots/ListFilters';
import Listing from '../../components/Lots/Listing';
import ErrorScreen from '../../components/Screen/ErrorScreen';
import Screen from '../../components/Screen/Screen';
import ScreenBody from '../../components/Screen/ScreenBody';
import ScreenHeader from '../../components/Screen/ScreenHeader';
import BackBtn from '../../components/UI/BackBtn';
import Button from '../../components/UI/Button';
import Spinner from '../../components/UI/Spinner';
import useNavigation from '../../context/navigation/useNavigation';
import { useGetLots } from '../../services/lots/useLotService';
import { useGetProjectById } from '../../services/projects/useProjectQueries';

function Heading({ projectName, children }) {
  return (
    <>
      <span className="-mt-4 text-base text-zinc-400 block">{projectName}</span>
      {children}
    </>
  );
}

function LotListing() {
  const { pid } = useParams();
  const setLink = useNavigation(state => state.setLink);
  const [view, setView] = useState('detail'); // detail | slim
  const { data, isLoading, isError, error } = useGetLots({
    projectId: pid,
    filters: { isListing: true },
  });

  if (isError) return <ErrorScreen error={error} />;

  return (
    <Screen>
      <ScreenHeader
        heading={
          <Heading projectName={data ? data.projectName : 'Cargando...'}>
            Listado de Lotes
          </Heading>
        }
      ></ScreenHeader>
      <ScreenBody>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="flex col-span-2">
              <Button
                onClick={() =>
                  setView(state => (state === 'detail' ? 'slim' : 'detail'))
                }
                className="mr-auto ml-2 bg-info border-info text-white py-1 px-4 rounded-full hover:bg-white hover:text-info "
              >
                {view === 'slim' ? 'Ver Detallado' : 'Ver Simple'}
              </Button>
            </div>
            <Listing
              className="col-span-1"
              view={view}
              projectId={pid}
              projectName={data.projectName}
              lots={data.lots}
            />
            <ListFilters />
          </>
        )}
      </ScreenBody>
      <BackBtn
        to={`/project/${pid}`}
        onClick={() => setLink('projectsLink', `/project/${pid}`)}
      />
    </Screen>
  );
}

export default LotListing;
