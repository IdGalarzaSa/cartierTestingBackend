import { Injectable } from '@nestjs/common';

@Injectable()
export class TestingService {

  private timeout = 80000

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async getRings(): Promise<Object[]> {
    // console.log(`get rings - ${this.timeout}`)
    // await this.delay(this.timeout)
    // this.timeout = this.timeout - 10000
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
        "file_asset_url": "/data/docs/ALG_WWM_PDFsample.pdf",
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
        "file_asset_url": "/data/docs/ALG_WWM_PDFsample.pdf",
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
        "file_asset_url": "/data/docs/ALG_WWM_PDFsample.pdf",
        "updated": 1650877054,
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

}
