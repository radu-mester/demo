import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AppHeader, Page } from "@dynatrace/strato-components-preview/layouts";
import { HostList } from "./pages/HostList";
import { StatusHistory } from "./pages/StatusHistory";
import { ExtendedHostDetails } from "./pages/ExtendedHostDetails"; //

export const App = () => {
  return (
    <Page>
      <Page.Header>
        <AppHeader>
          <AppHeader.NavItems>
            <AppHeader.AppNavLink as={Link} to="/" />
            <AppHeader.NavItem as={Link} to="/status-history">
              Status History
            </AppHeader.NavItem>
            <AppHeader.NavItem as={Link} to="/extended-host-details">
              ExtendedHostDetails
            </AppHeader.NavItem>
          </AppHeader.NavItems>
        </AppHeader>
      </Page.Header>
      <Page.Main>
        <Routes>
          <Route path="/" element={<HostList />} />
          <Route path="/status-history" element={<StatusHistory />} />

          <Route
            path="/extended-host-details"
            element={<ExtendedHostDetails />}
          />
        </Routes>
      </Page.Main>
    </Page>
  );
};
