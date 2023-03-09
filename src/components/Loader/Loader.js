import { ColorRing } from 'react-loader-spinner';
import { Loading } from './Loader.jsx';

export const Loader = () => {
    return (
        <Loading>
            <ColorRing width={100} height={100} />
        </Loading>
    );
};
