import React from "react";

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

import SearchPreview from "../components/search-preview";

const searchClient = algoliasearch('BJ28ZE2PI2', 'e4f69a18daf130206dad5fc040b7d4b5');

const Search = () => (
    <div class="w-8/12 mx-auto">
        <InstantSearch searchClient={searchClient} indexName="Fallfish_Tenkara_Blog">
            <div class="mt-12">
                <SearchBox />
            </div>
            <Hits hitComponent={SearchPreview}/>
        </InstantSearch>
    </div>
);

export default Search
