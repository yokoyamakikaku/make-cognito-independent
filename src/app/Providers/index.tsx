'use client'

import { FC, PropsWithChildren } from "react";
import { Amplify, I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';
import config from '@/aws-exports'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

Amplify.configure(config);
I18n.putVocabularies(translations);
I18n.setLanguage('ja');

const client = new QueryClient()

const Providers: FC<PropsWithChildren> =({children}) => {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}

export default Providers
