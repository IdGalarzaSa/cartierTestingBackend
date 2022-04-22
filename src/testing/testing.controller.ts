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


  @Get("api/bts/getRings")
  getRings() {
    return [
      {
        "is_deleted": false,
        "ring_id": "N4246000_sol_des16",
        "name": "LOVE SOLITAIRE SPECIAL REAL TIME",
        "reference_number": "CRN4187352",
        "description": "LOVE solitaire, rose gold 750/1000, set with a brilliant-cut diamond ",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/demoRing.png",
        "ring_image_hd": "/data/images/demoRingHD.png",
        "overlay_image_url": "/data1/rings/N4246000_sol_des16/3a772893-a66c-4857-aa3e-eecc27440655",
        "id": 13
      }
    ]
  }
  

  // Init streaming
  @Post("/realtime")
  initRealTime(@Body() body) {
    // console.log(`Recording: ${JSON.stringify(body)}`)
    // console.log(`${body.ring_id}`)

    if (body.ring_id == "CRN4187352_love_solitaire_real_time") {
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
    } else {
      return {
        "filename":"",
        "filepath":"",
        "date":0,
        "fps":60,
        "resolution":"",
        "uuid": "1158de31-c840-48b9-8bfb-941a1b65cccb",
        "frames":0,
        "thumb_path":"",
        "rings":[]
      }
    }
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
    let myuuid = uuidv4();
    return {
      "filename": "moonVideo.mp4",
      "filepath": "sample1.mp4",
      "date": 1624436412,
      "fps": 60,
      "resolution": "1920x1080",
      "uuid": myuuid,
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
