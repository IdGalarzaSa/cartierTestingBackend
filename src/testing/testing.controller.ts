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


  @Get("api/rings")
  getRings() {
    return [
      {
        "is_deleted": false,
        "ring_id": "anillo1",
        "name": "essaouira ring",
        "reference_number": "CRN41873511",
        "description": "white gold 750/1000, fluted emerald and chalcedony beads, calibrated and princess-cut sapphires, onyx, turquoise. all set with 56 brilliant-cut diamonds totaling 1.22 carats",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring1/DMA_essaouira_S.png",
        "ring_image_hd": "/data/images/ring1/DMA_essaouira_L.png",
        "overlay_image_url": "/data1/rings/N4246000_sol_des16/3a772893-a66c-4857-aa3e-eecc27440655",
        "updated": 1650877051,
        "id": 11
      },
      {
        "is_deleted": false,
        "ring_id": "anillo2",
        "name": "emerald ring",
        "reference_number": "CRN4187312",
        "description": "white gold 750/1000, emeralds, onyx, 180 diamonds totaling 2.39 carats",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring2/DMA_emerald_S.png",
        "ring_image_hd": "/data/images/ring2/DMA_emerald_L.png",
        "overlay_image_url": "/data1/rings/N4246000_sol_des16/3a772893-a66c-4857-aa3e-eecc27440655",
        "updated": 1650877052,
        "id": 12
      },
      {
        "is_deleted": false,
        "ring_id": "anillo3",
        "name": "Ring 3",
        "reference_number": "CRN4187353",
        "description": "white gold 750/1000, fluted emerald and chalcedony beads, calibrated and princess-cut sapphires, onyx, turquoise. all set with 56 brilliant-cut diamonds totaling 1.22 carats",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring3/DMA_sanyogita_S.png",
        "ring_image_hd": "/data/images/ring3/DMA_sanyogita_L.png",
        "overlay_image_url": "/data1/rings/N4246000_sol_des16/3a772893-a66c-4857-aa3e-eecc27440655",
        "updated": 1650877053,
        "id": 13
      },
      // {
      //   "is_deleted": false,
      //   "ring_id": "anillo4",
      //   "name": "Ring 4",
      //   "reference_number": "CRN4187354",
      //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum - 2.",
      //   "category": "Fine Jewelry",
      //   "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
      //   "ring_image": "/data/images/ring2/ring2-S.png",
      //   "ring_image_hd": "/data/images/ring2/ring2-XL.png",
      //   "overlay_image_url": "/data1/rings/N4246000_sol_des16/3a772893-a66c-4857-aa3e-eecc27440655",
      //   "date": 1650877044,
      //   "id": 4
      // },
      // {
      //   "is_deleted": false,
      //   "ring_id": "anillo5",
      //   "name": "Ring 5",
      //   "reference_number": "CRN4187355",
      //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum - 2.",
      //   "category": "Fine Jewelry",
      //   "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
      //   "ring_image": "/data/images/ring1/ring1-S.png",
      //   "ring_image_hd": "/data/images/ring1/ring1-XL.png",
      //   "overlay_image_url": "/data1/rings/N4246000_sol_des16/3a772893-a66c-4857-aa3e-eecc27440655",
      //   "date": 1650877045,
      //   "id": 5
      // },
    ]
  }
  

  // Init streaming
  @Post("/realtime")
  initRealTime(@Body() body) {

    // console.log(body)

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

    // if (body.ring_id == "CRN4187352_love_solitaire_real_time") {
    //   return {
    //     "filename":"",
    //     "filepath":"",
    //     "date":0,
    //     "fps":60,
    //     "resolution":"",
    //     "uuid":"d8102b97-40d5-4354-8517-2e954e681467",
    //     "frames":0,
    //     "thumb_path":"",
    //     "rings":[]
    //   }
    // } else {
    //   return {
    //     "filename":"",
    //     "filepath":"",
    //     "date":0,
    //     "fps":60,
    //     "resolution":"",
    //     "uuid": "1158de31-c840-48b9-8bfb-941a1b65cccb",
    //     "frames":0,
    //     "thumb_path":"",
    //     "rings":[]
    //   }
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
