import { Body, Controller, Delete, Get, Param, Post, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import {v4 as uuidv4} from 'uuid'

@Controller()
export class TestingController {

  @Get("/video/:filepath")
  videoDownload(@Param('filepath') filepath: string) {
    const file = createReadStream(join(process.cwd(),`src/files/${filepath}`));
    return new StreamableFile(file)
  }


  // // Cartier services


  // @Get("/data/videos/:uuid/rings/:ringID")
  // downloadVideo(@Param('uuid') uuid: string, @Param('ringID') ringId: string ) {
  //   const file = createReadStream(join(process.cwd(),`src/files/${filepath}`));
  //   return new StreamableFile(file)
  // }


  @Get("/home/lookingglass/data/ios_app/rings_info.json")
  getRings() {
    return {
      "rings": [
        {
          "ring_id": "CRN4187352_love_solitaire",
          "name": "LOVE SOLITAIRE",
          "reference_number": "CRN4187352",
          "description": "LOVE solitaire, rose gold 750/1000, set with a brilliant-cut diamond available from 0.23 to 0.49 carats.",
          "ring_image": "data/ios_app/ALG_Ring_Love-Solitaire.png",
          "category": "Fine Jewelry",
          "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html"
        },
        {
          "ring_id": "CRN4773752_c_decartier_solitaire",
          "name": "C DE CARTIER SOLITAIRE",
          "reference_number": "CRN4773752",
          "description": "LOVE solitaire, rose gold 750/1000, set with a brilliant-cut diamond available from 0.23 to 0.49 carats.",
          "ring_image": "data/ios_app/ALG_Ring_C-de-Cartier-Solitaire.png",
          "category": "TK",
          "catalog_url": "NA"
        }
      ]
    }
  }
  

  // Init streaming
  @Post("/realtime")
  initRealTime(@Body() body) {

    // console.log(`Recording: ${JSON.stringify(body)}`)

    return {
      "filename":"",
      "filepath":"",
      "date":0,
      "fps":60,
      "resolution":"",
      "uuid":"d8102b97-40d5-4354-8517-2e954e681467",
      "frames":0,
      "thumb_path":"",
      "rings":[]
    }
    // {
    //   "filename": "moonVideo.mp4",
    //   "filepath": "sample1.mp4",
    //   "date": 1624436412,
    //   "fps": 60,
    //   "resolution": "1920x1080",
    //   "uuid": "1158de31-c840-48b9-8bfb-941a1b65cccb",
    //   "frames": 0,
    //   "thumb_path": "demoRing1.png",
    //   "ring_id": "N4246000_sol_des"
    // }
  }

  // Stop streaming
  @Delete("/realtime")
  deleteRealTime() {
    return "ok"
  }

  // Delete video
  @Delete("realtime_storage/:id")
  deleteRecord(@Param('id') uuid: string) {
    return "ok"
  }

  @Get("realtime_storage/:id")
  getRecordingInfo(@Param('id') uuid: string) {
    // let myuuid = uuidv4();
    return {
      "filename": "moonVideo.mp4",
      "filepath": "sample1.mp4",
      "date": 1624436412,
      "fps": 60,
      "resolution": "1920x1080",
      "uuid": "d8102b97-40d5-4354-8517-2e954e681467",
      "frames": 0,
      "thumb_path": "demoRing1.png",
      "ring_id": "N4246000_sol_des"
    }
  }

  @Get("realtime_storage")
  getRecordingList() {
    return {
      "videos": [
        {
          "filename": "moonVideo.mp4",
          "filepath": "sample1.mp4",
          "date": 1624436412,
          "fps": 60,
          "resolution": "1920x1080",
          "uuid": "d8102b97-40d5-4354-8517-2e954e681467",
          "frames": 0,
          "thumb_path": "demoRing1.png",
          "ring_id": "N4246000_sol_des"
        }
      ]
    }
  }





}
