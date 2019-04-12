import React, { Component } from "react";
import "@myob/myob-styles/dist/styles/myob-clean.css";
import { StandardTemplate, PageHead, Button, Table } from "@myob/myob-widgets";

class App extends Component {
  render() {
    const tableData = [
      {
        id: 1,
        name: "Sollicitudin Ultricies",
        email: "lamcorper@email.com",
        phone: "+64 346 289 876"
      },
      {
        id: 2,
        name: "Dapibus Sollicitudin",
        email: "etiam@email.com",
        phone: "+64 879 945 743"
      }
    ];

    const mockNormalPageHead = (
      <PageHead title="This is a title">
        <Button type="secondary">Secondary</Button>
        <Button type="primary">Primary</Button>
      </PageHead>
    );

    const mockCustomTableHeader = (
      <Table hasActions>
        <Table.Header>
          <Table.HeaderItem columnName="Name">Name</Table.HeaderItem>
          <Table.HeaderItem columnName="Email">Email</Table.HeaderItem>
          <Table.HeaderItem columnName="Phone">Phone</Table.HeaderItem>
        </Table.Header>
      </Table>
    );

    const mockCustomTableBody = (
      <Table hasActions>
        <Table.Body>
          {tableData.map(row => (
            <Table.Row key={row.id}>
              <Table.RowItem columnName="Name">{row.name}</Table.RowItem>
              <Table.RowItem columnName="Email" title={row.email}>
                <a href={`mailto:${row.email}`}>{row.email}</a>
              </Table.RowItem>
              <Table.RowItem columnName="Phone" title={row.phone}>
                <a href={`tel:${row.phone}`}>{row.phone}</a>
              </Table.RowItem>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ebeef1"
        }}
      >
        <StandardTemplate
          pageHead={mockNormalPageHead}
          tableHeader={mockCustomTableHeader}
        >
          {mockCustomTableBody}
        </StandardTemplate>
      </div>
    );
  }
}

export default App;
