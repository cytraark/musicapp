'use client'
import { Table, Input, Button } from "rsuite"
import { useState, useEffect } from "react"


export default function Home() {
  const [data, setData] = useState([])
  const [filterMusic,setFilterMusic] = useState([])
  const [searchState, setSearchState] = useState()
  const { Column, HeaderCell, Cell } = Table;

  useEffect(() => { 
    const getMusic = async () => { 
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => { 
          return res.json()
        })
        .then(data => { 
          setData(data)
        })
    
    }

    getMusic()

  },[])
  return (
    <>
      <div className=" w-screen h-screen flex flex-col gap-5 bg-gray-900">
        <div className="flex flex-col place-content-center pt-10">
          <div className="flex flex-row justify-start pl-10 pt-5 text-white">
            <h2>Music App for Testing</h2>
          </div>
           <div className="flex flex-row justify-start gap-2 pt-10 pl-10 w-1/2">
            {" "}
            <Input
              size="md"
              placeholder="Search Music!"
              onChange={setSearchState}
              value={searchState}
            />
          </div>
          <div className="flex flex-col place-content-center justify-center">
            <Table
               style={{
                      display: "block",
                      width: 950,
                      height: 500,
                      padding: 40,
                      justifyContent: "center",
            }}
              data={data}
              onRowClick={rowData => {
                console.log(rowData);
              }}
            >
              <Column width={60} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
              </Column>

              <Column width={150}>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="name" />
              </Column>

              <Column width={150}>
                <HeaderCell>Last Name</HeaderCell>
                <Cell dataKey="lastName" />
              </Column>
              <Column width={100} fixed="right">
                <HeaderCell>...</HeaderCell>

                <Cell style={{ padding: '6px' }}>
                  {rowData => (
                    <Button appearance="ghost" onClick={() => alert(`id:${rowData.id}`)}>
                      Play
                    </Button>
                  )}
                </Cell>
              </Column>
            </Table>
          </div>
        </div> 
      </div>
        
    </>
  )
}
