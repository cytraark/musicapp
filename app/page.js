'use client'
import { Table, Input, Button } from "rsuite"
import { useState } from "react"
export default function Home() {
  const [data, setData] = useState()
  const [filterMusic,setFilterMusic] = useState()
  const [searchState, setSearchState] = useState()
  const { Column, HeaderCell, Cell } = Table;
  return (
    <>
      <div className=" w-screen h-screen overflow-y-scroll overflow-x-hidden bg-white">
        <div className=" z-10 flex flex-wrap gap-5 relative place-content-center w-screen mt-20 bg-white text-black">
          <h1> Music App</h1>
          <Input placeholder="Search Music"></Input>
        </div>
        <div className="flex flex-col">
          <Table
            height={400}
            data={data}
            onRowClick={rowData => {
              console.log(rowData);
            }}
          >
            <Column width={60} align="center" fixed>
              <HeaderCell>Song</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column width={150}>
              <HeaderCell>Artist</HeaderCell>
              <Cell dataKey="firstName" />
            </Column>

            <Column width={150}>
              <HeaderCell>Year</HeaderCell>
              <Cell dataKey="lastName" />
            </Column>

        
            <Column width={80} fixed="right">
              <HeaderCell>...</HeaderCell>

              <Cell style={{ padding: '6px' }}>
                {rowData => (
                  <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
                    Edit
                  </Button>
                )}
              </Cell>
            </Column>
          </Table>
        </div>
      </div>
    </>
  )
}
