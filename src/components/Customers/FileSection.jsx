import React, { useState } from 'react';
import useToast from '../../context/toast/useToast';
import shallow from 'zustand/shallow';
import { usePutFile } from '../../services/customers/useCustomers';
import getClassname from '../../utils/getClassname';
import HeaderBtn from '../Projects/HeaderBtn';
import Row from '../Section/Row';
import Section from '../Section/Section';
import Button from '../UI/Button';
import FileBtn from '../UI/FileBtn';
import queryClient from '../../requests/client';
import customerKeys from '../../services/customers/customerKeys';

function FileSection({ files, customerId }) {
    const [isFormShown, setIsFormShown] = useState(false);

    return (
        <Section
            heading="Archivos"
            header={
                <HeaderBtn onClick={() => setIsFormShown(shown => !shown)}>
                    Añadir
                </HeaderBtn>
            }
            useCard={true}
            cardShadow={true}
            style={{ position: 'initial' }}
        >
            <Row className={getClassname('gap-x-4', !isFormShown && 'mb-0')}>
                {files.length === 0 ? (
                    <p className="text-2xl text-zinc-300 text-center font-semibold w-full py-4">
                        Sin archivos
                    </p>
                ) : null}
                {files.map(f => {
                    return (
                        <div className="basis-auto grow-0 shrink-0" key={f._id}>
                            <FileBtn path={f.staticPath}>{f.name}</FileBtn>
                        </div>
                    );
                })}
            </Row>
            <UploadForm isShown={isFormShown} customerId={customerId} />
        </Section>
    );
}

export default FileSection;

function UploadForm({ customerId, isShown }) {
    const { displayErrorToast, displayToast } = useToast(
        state => ({
            displayErrorToast: state.displayErrorToast,
            displayToast: state.displayToast,
        }),
        shallow
    );
    const [data, setData] = useState({
        file: undefined,
        fileName: '',
    });

    const putFileMutation = usePutFile();

    return (
        <form
            className={getClassname(
                'flex flex-col justify-between items-center px-4 h-0 bg-zinc-500 bg-opacity-40 rounded transition-[height] duration-300 border-dashed border-zinc-600 overflow-hidden',
                isShown && 'py-6 h-56 border-4'
            )}
            onSubmit={async e => {
                e.preventDefault();

                console.log('Start upload');
                await putFileMutation.mutateAsync(
                    {
                        customerId,
                        file: data.file,
                        fileName: data.fileName,
                    },
                    {
                        onError: err => displayErrorToast(err.message),
                        onSuccess: () => {
                            queryClient.invalidateQueries(
                                customerKeys.detail(customerId)
                            );
                            displayToast('El archivo se subio con exito');
                            setData({ fileName: '', file: undefined });
                        },
                    }
                );
            }}
        >
            <input
                type="text"
                className="rounded border-2 border-zinc-100 outline-info text-lg py-1 px-2 text-zinc-800 placeholder-zinc-400"
                placeholder="Nombre del Archivo..."
                onChange={e =>
                    setData(state => ({ ...state, fileName: e.target.value }))
                }
                value={data.fileName}
            />
            <input
                type="file"
                className="p-1 border-2 border-info text-zinc-900 font-medium rounded"
                onChange={e =>
                    setData(state => ({ ...state, file: e.target.files[0] }))
                }
            />
            <Button
                type="submit"
                className="px-4 py-2 bg-info border-info rounded text-white m-0"
            >
                Subir
            </Button>
        </form>
    );
}
