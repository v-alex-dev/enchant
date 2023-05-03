import React, { useState, useEffect } from 'react';
import {DataTable} from "primereact/datatable";
import { classNames } from 'primereact/utils';
import {getAllGame} from "../api/gameApi";
import {Column} from "primereact/column";
import {InputText} from "primereact/inputtext";

function Games() {
    const [games, setGames] = useState()
    const [globalFilter, setGlobalFilter] = useState(null);

    useEffect(() => {
        getAllGame().then(data => setGames(data))
    }, [])

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Table de jeux</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );


    return (
        <section className={'game'}>
            <div className="card">
                <DataTable value={games}
                           tableStyle={{ minWidth: '50rem' }}
                           dataKey="id"
                           paginator rows={10}
                           rowsPerPageOptions={[5, 10, 25]}
                           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                           currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}

                >
                    <Column field="player_FK.firstName" header="Nom"></Column>
                    <Column field="player_FK.lastName" header="Prénom"></Column>
                    <Column field="player_FK.world" header="Moogle"></Column>
                    <Column field="enchantement_FK.name" header="Gage"></Column>
                    <Column field="enchantement_FK.description" header="Description"></Column>
                    <Column field="des_number" header="Dés"></Column>
                </DataTable>
            </div>
        </section>
    );
}

export default Games;