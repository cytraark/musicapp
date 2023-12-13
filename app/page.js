'use client'
import { Table, Input, Button,IconButton } from "rsuite"
import { useState, useEffect } from "react"
import axios from "axios"
import PauseIcon from '@rsuite/icons/legacy/Pause';
import PlayIcon from '@rsuite/icons/legacy/Play';


export default function Home() {
  const [data, setData] = useState([])
  const [searchState, setSearchState] = useState("")
  const [musicHandler,setMusicHandler]= useState("")
  const { Column, HeaderCell, Cell } = Table;
  const [music,setMusic] = useState(null)
  useEffect(() => { 
    setMusic(new Audio(URL))
    const getMusic = async () => { 
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
      console.log(access.data.data)
      setData(access.data.data)
    }
    getMusic()
  }, [])
  
  return (
    <>
      <div className=" w-screen h-screen flex flex-col gap-5 bg-white">
        <div className="flex flex-col place-content-center pt-10">
          <div className="flex flex-row justify-center pl-10 pt-5 text-black">
            <h2>Music App for Testing</h2>
          </div>
          <div className="flex flex-col justify-center place-content-center gap-2 pt-10 pl-40 pr-40">
            <Input
              size="md"
              placeholder="Search Music!"
              onChange={() => { 
                setSearchState
              }}
              value={searchState}
            />
            <Button appearance="ghost" color="green" onClick={async() => { 
              getMusic()
            }}>Search</Button>
          </div>
          <div className="flex flex-wrap place-content-center justify-center">
            {data === undefined || data === null ? (
              <>
                <div className="flex flex-row gap-2 pt-10 justify-center w-1/2">
                  <p>There is no music. Please search!</p>
                </div>
              </>
            ) : (<>
                <div className="flex flex-col justify-center gap-3">

                  <Table
                    style={{
                            display: "block",
                            width: 950,
                            padding: 40,
                            justifyContent: "center",
                    }}
                    height={500}
                    virtualized
                    data={data}
                    onRowClick={rowData => {
                      { 
                        setMusicHandler(rowData.title)
                        music.src = rowData.preview
                      }
                    }}
                >
              <Column width={350}>
                <HeaderCell>Song</HeaderCell>
                <Cell dataKey="title" />
              </Column>

              <Column width={130}>
                <HeaderCell>Artist</HeaderCell>
                <Cell dataKey="artist.name" />
              </Column>

              <Column width={200}>
                <HeaderCell>Short Title</HeaderCell>
                <Cell dataKey="title_short" />
              </Column>
                    
              <Column width={150}>
                <HeaderCell>...</HeaderCell>
                <Cell>
                        {rowData => { 
                          if (rowData.preview === music.src) {
                            return <p>Playing</p>
                          } else { 
                            return <p>Not Playing</p>
                          }
                        }}  
                </Cell>
              </Column>
              
            </Table>
                </div>
              
            </>)}
          </div>
          {musicHandler === undefined || musicHandler === null || musicHandler === "" ? (<>
            
          </>) : (<>
          <div className="flex flex-row place-content-center gap-3 pt-2">
            <h6>Now Playing: {musicHandler}</h6>
          </div>
          <div className="flex flex-row place-content-center gap-3 pt-5 justify-center">
            <IconButton icon={<PauseIcon />} placement="left" onClick={() => { 
              music.pause()
            }}>
                Pause
              </IconButton>
            <IconButton icon={<PlayIcon />} placement="right" onClick={() => { 
              music.play()
            }} >
                Play
              </IconButton>
          </div></>)}
         
        </div> 
      </div>
        
    </>
  )
}
