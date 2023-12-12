'use client'
import { Table, Input, Button } from "rsuite"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Home() {
  const [data, setData] = useState([])
  const [filterMusic,setFilterMusic] = useState([])
  const [searchState, setSearchState] = useState()
  const { Column, HeaderCell, Cell } = Table;

  useEffect(() => { 
    const getMusic = async () => { 
      let array = []
      const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: 'eminem'},
        headers: {
          'X-RapidAPI-Key': 'f78ffe324fmshed767f7d95c68d1p1f5856jsneb2c7255ab35',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };
      let access = await axios.request(options)
    
      setData(access.data.data)
    }
    getMusic()
  },[])
  return (
    <>
      <div className=" w-screen h-screen flex flex-col gap-5 bg-white">
        <div className="flex flex-col place-content-center pt-10">
          <div className="flex flex-row justify-start pl-10 pt-5 text-black">
            <h2>Music App for Testing</h2>
          </div>
           <div className="flex flex-row justify-start gap-2 pt-10 pl-10 pr-10 w-1/2">
            {" "}
            <Input
              size="md"
              placeholder="Search Music!"
              onChange={setSearchState}
              value={searchState}
            />
          </div>
          <div className="flex flex-col place-content-center justify-center">
            {data === undefined || data === null ? (
              <>
                <div className="flex flex-row gap-2 pt-10 justify-center w-1/2">
                  <p>There is no data. Please refresh!</p>
                </div>
              </>
            ) : (<>
              <Table
               style={{
                      display: "block",
                      width: 950,
                      height: 500,
                      padding: 40,
                      justifyContent: "center",
                  }}
              virtualized
              data={data}
              onRowClick={rowData => {
                console.log(rowData);
              }}
            >
              <Column width={400}>
                <HeaderCell>Song</HeaderCell>
                <Cell dataKey="title" />
              </Column>

              <Column width={200}>
                <HeaderCell>Artist</HeaderCell>
                <Cell dataKey="artist.name" />
              </Column>

              <Column width={150}>
                <HeaderCell>Duration</HeaderCell>
                <Cell dataKey="duration" />
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
            </>)}
          </div>
        </div> 
      </div>
        
    </>
  )
}
