import { Body, Controller, Delete, Get, Param, Post, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import {v4 as uuidv4} from 'uuid'
import { TestingService } from './testing.service';

@Controller()
export class TestingController {
  constructor(
    private testingService: TestingService
  ){}

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
  async getRings(): Promise<Object[]> {
    return this.testingService.getRings()
  }
    
  @Post("api/generate-takeaway-images")
  generateTakeAway(@Body() body) {
    return {
      "sent": true,
      "takeaway_paths": [
        "/data/takeaways/d38467fb-15ca-4ba3-b8b5-d17ad08b6800_00001321.jpg",
        "/data/takeaways/d38467fb-15ca-4ba3-b8b5-d17ad08b6800_00001441.jpg",
        "/data/takeaways/d38467fb-15ca-4ba3-b8b5-d17ad08b6800_00001561.jpg",
      ]
    }
  }
  
  @Post("api/streaming-restart")
  startStreamingv2() {
    return {
      "error": false,
      "streaming": true,
      "msg": "Error on Stop streaming",
      "streaming_pid": 9087574
    }
  }

  @Post("api/streaming-stop")
  stopStreaming() {
    return {
      "error": false,
      "streaming": true,
      "msg": "Error on Stop streaming",
      "streaming_pid": 9087574
    }
  }


  @Post("api/generate-takeaway-video")
  generateTakeawayVideo(@Body() body) {
    return {
      "sent": true,
      "takeaway_paths": [
        "/data/takeaways/ALG-ML Stream_Sample_8s_1.mp4"
      ]
    }
  }

  @Get("api/getAllRings")
  getAllRings() {
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
        "overlay_image_url": "/data/images/ring1/takeAway11.png",
        "cover_image_url": "/data/images/ring1/cover1.png",
        "updated": 1650877051,
        "id": 11
      },
      {
        "is_deleted": false,
        "ring_id": "anillo2",
        "name": "emerald ring",
        "reference_number": "CRN4187312",
        "description": "PLATINUM, ONE 9.01 CARAT EMERALD-CUT EMERALD FROM COLOMBIA, TWO TAPERED BAGUETTE DIAMONDS TOTALING 0.64 CARATS D-E/VVS1",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring2/DMA_emerald_S.png",
        "ring_image_hd": "/data/images/ring2/DMA_emerald_L.png",
        "overlay_image_url": "/data/images/ring2/takeAway21.png",
        "cover_image_url": "/data/images/ring2/cover2.png",
        "updated": 1650877052,
        "id": 12
      },
      {
        "is_deleted": false,
        "ring_id": "anillo3",
        "name": "SANYOGITA RING",
        "reference_number": "CRN4187353",
        "description": "PLATINUM, ONE 10.00-CARAT RUBY FROM MOZAMBIQUE, CARVED RUBIES, SAPPHIRES AND EMERALDS, ONYX, BRILLIANT-CUT DIAMONDS",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring3/DMA_sanyogita_S.png",
        "ring_image_hd": "/data/images/ring3/DMA_sanyogita_L.png",
        "overlay_image_url": "/data/images/ring3/takeAway31.png",
        "cover_image_url": "/data/images/ring3/cover3.png",
        "updated": 1650877054,
        "id": 13
      },
      {
        "is_deleted": false,
        "ring_id": "anillo4",
        "name": "essaouira ring",
        "reference_number": "CRN41873511",
        "description": "white gold 750/1000, fluted emerald and chalcedony beads, calibrated and princess-cut sapphires, onyx, turquoise. all set with 56 brilliant-cut diamonds totaling 1.22 carats",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring1/DMA_essaouira_S.png",
        "ring_image_hd": "/data/images/ring1/DMA_essaouira_L.png",
        "overlay_image_url": "/data/images/ring1/takeAway11.png",
        "cover_image_url": "/data/images/ring1/cover1.png",
        "updated": 1650877051,
        "id": 14
      },
      {
        "is_deleted": false,
        "ring_id": "anillo5",
        "name": "emerald ring",
        "reference_number": "CRN4187312",
        "description": "PLATINUM, ONE 9.01 CARAT EMERALD-CUT EMERALD FROM COLOMBIA, TWO TAPERED BAGUETTE DIAMONDS TOTALING 0.64 CARATS D-E/VVS1",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring2/DMA_emerald_S.png",
        "ring_image_hd": "/data/images/ring2/DMA_emerald_L.png",
        "overlay_image_url": "/data/images/ring2/takeAway21.png",
        "cover_image_url": "/data/images/ring2/cover2.png",
        "updated": 1650877052,
        "id": 15
      },
      {
        "is_deleted": false,
        "ring_id": "anillo6",
        "name": "SANYOGITA RING",
        "reference_number": "CRN4187353",
        "description": "PLATINUM, ONE 10.00-CARAT RUBY FROM MOZAMBIQUE, CARVED RUBIES, SAPPHIRES AND EMERALDS, ONYX, BRILLIANT-CUT DIAMONDS",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring3/DMA_sanyogita_S.png",
        "ring_image_hd": "/data/images/ring3/DMA_sanyogita_L.png",
        "overlay_image_url": "/data/images/ring3/takeAway31.png",
        "cover_image_url": "/data/images/ring3/cover3.png",
        "updated": 1650877054,
        "id": 16
      },
      {
        "is_deleted": false,
        "ring_id": "anillo7",
        "name": "essaouira ring",
        "reference_number": "CRN41873511",
        "description": "white gold 750/1000, fluted emerald and chalcedony beads, calibrated and princess-cut sapphires, onyx, turquoise. all set with 56 brilliant-cut diamonds totaling 1.22 carats",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring1/DMA_essaouira_S.png",
        "ring_image_hd": "/data/images/ring1/DMA_essaouira_L.png",
        "overlay_image_url": "/data/images/ring1/takeAway11.png",
        "cover_image_url": "/data/images/ring1/cover1.png",
        "updated": 1650877051,
        "id": 17
      },
      {
        "is_deleted": false,
        "ring_id": "anillo8",
        "name": "emerald ring",
        "reference_number": "CRN4187312",
        "description": "PLATINUM, ONE 9.01 CARAT EMERALD-CUT EMERALD FROM COLOMBIA, TWO TAPERED BAGUETTE DIAMONDS TOTALING 0.64 CARATS D-E/VVS1",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring2/DMA_emerald_S.png",
        "ring_image_hd": "/data/images/ring2/DMA_emerald_L.png",
        "overlay_image_url": "/data/images/ring2/takeAway21.png",
        "cover_image_url": "/data/images/ring2/cover2.png",
        "updated": 1650877052,
        "id": 18
      },
      {
        "is_deleted": false,
        "ring_id": "anillo9",
        "name": "SANYOGITA RING",
        "reference_number": "CRN4187353",
        "description": "PLATINUM, ONE 10.00-CARAT RUBY FROM MOZAMBIQUE, CARVED RUBIES, SAPPHIRES AND EMERALDS, ONYX, BRILLIANT-CUT DIAMONDS",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring3/DMA_sanyogita_S.png",
        "ring_image_hd": "/data/images/ring3/DMA_sanyogita_L.png",
        "overlay_image_url": "/data/images/ring3/takeAway31.png",
        "cover_image_url": "/data/images/ring3/cover3.png",
        "updated": 1650877054,
        "id": 19
      },
      {
        "is_deleted": false,
        "ring_id": "anillo10",
        "name": "essaouira ring",
        "reference_number": "CRN41873511",
        "description": "white gold 750/1000, fluted emerald and chalcedony beads, calibrated and princess-cut sapphires, onyx, turquoise. all set with 56 brilliant-cut diamonds totaling 1.22 carats",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring1/DMA_essaouira_S.png",
        "ring_image_hd": "/data/images/ring1/DMA_essaouira_L.png",
        "overlay_image_url": "/data/images/ring1/takeAway11.png",
        "cover_image_url": "/data/images/ring1/cover1.png",
        "updated": 1650877051,
        "id": 20
      },
      {
        "is_deleted": false,
        "ring_id": "anillo11",
        "name": "emerald ring",
        "reference_number": "CRN4187312",
        "description": "PLATINUM, ONE 9.01 CARAT EMERALD-CUT EMERALD FROM COLOMBIA, TWO TAPERED BAGUETTE DIAMONDS TOTALING 0.64 CARATS D-E/VVS1",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring2/DMA_emerald_S.png",
        "ring_image_hd": "/data/images/ring2/DMA_emerald_L.png",
        "overlay_image_url": "/data/images/ring2/takeAway21.png",
        "cover_image_url": "/data/images/ring2/cover2.png",
        "updated": 1650877052,
        "id": 21
      },
      {
        "is_deleted": false,
        "ring_id": "anillo12",
        "name": "SANYOGITA RING",
        "reference_number": "CRN4187353",
        "description": "PLATINUM, ONE 10.00-CARAT RUBY FROM MOZAMBIQUE, CARVED RUBIES, SAPPHIRES AND EMERALDS, ONYX, BRILLIANT-CUT DIAMONDS",
        "category": "Fine Jewelry",
        "catalog_url": "https://www.cartier.com/en-us/jewelry/engagement-rings/love-solitaire-CRN4250100.html",
        "ring_image": "/data/images/ring3/DMA_sanyogita_S.png",
        "ring_image_hd": "/data/images/ring3/DMA_sanyogita_L.png",
        "overlay_image_url": "/data/images/ring3/takeAway31.png",
        "cover_image_url": "/data/images/ring3/cover3.png",
        "updated": 1650877054,
        "id": 22
      }
    ]
    
  }


  // Init streaming
  @Post("/realtime")
  initRealTime(@Body() body) {
    switch (body.ring_id) {
      case "anillo1":
        
        return {
          "filename": "moonVideo.mp4",
          "filepath": "sample1.mp4",
          "date": 1624436412,
          "fps": 60,
          "resolution": "1920x1080",
          "uuid": "d8102b97-40d5-4354-8517-2e954e681467",
          "frames": 0,
          "thumb_path": "demoRing1.png",
          "ring_id": "anillo1"
        };

      case "anillo2":
        
        return {
          "filename": "moonVideo.mp4",
          "filepath": "sample1.mp4",
          "date": 1624436412,
          "fps": 60,
          "resolution": "1920x1080",
          "uuid": "d8102b97-40d5-4354-8517-2e954e681467",
          "frames": 0,
          "thumb_path": "demoRing1.png",
          "ring_id": "anillo2"
        }

      case "anillo3":
        
        return {
          "filename": "moonVideo.mp4",
          "filepath": "sample1.mp4",
          "date": 1624436412,
          "fps": 60,
          "resolution": "1920x1080",
          "uuid": "d8102b97-40d5-4354-8517-2e954e681467",
          "frames": 0,
          "thumb_path": "demoRing1.png",
          "ring_id": "anillo3"
        }
    
      default:
        break;
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
