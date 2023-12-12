import WithTokenn from "@/app/config/axios/withTokenn";

export default function GetMusic() { 
    const GetMusicSearch = async (token, data) => { 
        let config = WithTokenn(token)
        let uData = "";
        await config.get(`${process.env.NEXT_PUBLIC_BASE_API_HOST}/search`, data)
        .then((res) => {
        uData = {
          data: res.data,
          status: res.status,
          message: res.message,
        };
        return uData;
      })
      .catch((err) => {
        return err.response;
      });
    return uData;
    }

    return {
        GetMusicSearch
    }
}