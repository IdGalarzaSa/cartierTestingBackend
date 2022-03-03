import { Controller, Delete, Get, Param, Post, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class TestingController {

  @Get("/video/:filepath")
  videoDownload(@Param('filepath') filepath: string) {
    const file = createReadStream(join(process.cwd(),`src/files/${filepath}`));
    return new StreamableFile(file)
  }


  // Cartier services

  // Init streaming
  @Post("/realtime")
  initRealTime() {
    return {
      "filename": "moonVideo.mp4",
      "filepath": "sample1.mp4",
      "date": 1624436412,
      "fps": 60,
      "resolution": "1920x1080",
      "uuid": "1158de31-c840-48b9-8bfb-941a1b65cccb",
      "frames": 0,
      "thumb_path": "hand_ring2.png",
      "ring_id": "N4246000_sol_des"
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
    if (uuid == "1158de31-c840-48b9-8bfb-941a1b65cccb") {
      return "ok"
    } else {
      return "no"
    }
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
      "uuid": `1158de31-c840-48b9-8bfb-941a1b65cccb`,
      "frames": 0,
      "thumb_path": "hand_ring2.png",
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
          "uuid": "1158de31-c840-48b9-8bfb-941a1b65cccb",
          "frames": 0,
          "thumb_path": "hand_ring2.png",
          "ring_id": "N4246000_sol_des"
        }
      ]
    }
  }





}
