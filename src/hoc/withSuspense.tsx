import React, {ComponentType, Suspense} from 'react';
import Preloader from "../components/common/Preloader/Preloader";

export function withSuspense(Component: ComponentType) {
    return (props: any) => (
        <Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </Suspense>
    );
}