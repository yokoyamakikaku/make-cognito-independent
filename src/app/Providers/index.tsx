'use client'

import { FC, PropsWithChildren } from "react";
import { Amplify, I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';
import config from '@/aws-exports'

Amplify.configure(config);
I18n.putVocabularies(translations);
I18n.setLanguage('ja');

const Providers: FC<PropsWithChildren> =({children}) => {
  return (
    <>
      {children}
    </>
  )
}

export default Providers
