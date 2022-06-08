// https://github.com/wojtekmaj/react-pdf/issues/136#issuecomment-716643894

import React from 'react';
import dynamic from 'next/dynamic';

const DocumentPreview = dynamic(() => import('./DocumentPreview'), { ssr: false });

export default DocumentPreview;
