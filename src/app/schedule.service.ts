import { Injectable } from '@angular/core';
import { Schedule } from './models/schedule';
import { UtilitiesService } from './utilities.service';

@Injectable()
export class ScheduleService {

 _schedules : Schedule[];
 _scheduleDict: any; 
// _xmlDoc : XMLDocument;
 //_doc : any;
 _bible: any = {
"Genesis" : 0, 
"Exodus" : 1,
"Leviticus" : 2,
"Numbers" : 3,
"Deuteronomy" : 4,
"Joshua" : 5,
"Judges" : 6,
"Ruth" : 7,
"1Samuel" : 8,
"2Samuel" : 9,
"1Kings" : 10,
"2Kings" : 11,
"1Chronicles" : 12,
"2Chronicles" : 13,
"Ezra" : 14,
"Nehemiah" : 15,
"Esther" : 16,
"Job" : 17,
"Psalm" : 18,
"Proverbs" : 19,
"Ecclesiastes" : 20,
"Song" : 21,
"Isaiah" : 22,
"Jeremiah" : 23,
"Lamentations" : 24,
"Ezekiel" : 25,
"Daniel" : 26,
"Hosea" : 27,
"Joel" : 28,
"Amos" : 29,
"Obadiah" : 30,
"Jonah" : 31,
"Micah" : 32,
"Nahum" : 33,
"Habakkuk" : 34,
"Zephaniah" : 35,
"Haggai" : 36,
"Zechariah" : 37,
"Malachi" : 38,
"Matthew" : 39,
"Mark" : 40,
"Luke" : 41,
"John" : 42,
"Acts" : 43, 
"Romans" : 44,
"1Corinthians" : 45,
"2Corinthians" : 46,
"Galatians" : 47,
"Ephesians" : 48,
"Philippians" : 49,
"Colossians" : 50,
"1Thessalonians" : 51,
"2Thessalonians" : 52,
"1Timothy" : 53,
"2Timothy" : 54,
"Titus" : 55,
"Philemon" : 56,
"Hebrews" : 57,
"James" : 58,
"1Peter" : 59,
"2Peter" : 60,
"1John" : 61,
"2John" : 62,
"3John" : 63,
"Jude" : 64,
"Revelation" : 65   
 }

_doc : any = {  
   "bible": {
      "book": [
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "31"
               },
               {
                  "_number": "2",
                  "_verses": "25"
               },
               {
                  "_number": "3",
                  "_verses": "24"
               },
               {
                  "_number": "4",
                  "_verses": "26"
               },
               {
                  "_number": "5",
                  "_verses": "32"
               },
               {
                  "_number": "6",
                  "_verses": "22"
               },
               {
                  "_number": "7",
                  "_verses": "24"
               },
               {
                  "_number": "8",
                  "_verses": "22"
               },
               {
                  "_number": "9",
                  "_verses": "29"
               },
               {
                  "_number": "10",
                  "_verses": "32"
               },
               {
                  "_number": "11",
                  "_verses": "32"
               },
               {
                  "_number": "12",
                  "_verses": "20"
               },
               {
                  "_number": "13",
                  "_verses": "18"
               },
               {
                  "_number": "14",
                  "_verses": "24"
               },
               {
                  "_number": "15",
                  "_verses": "21"
               },
               {
                  "_number": "16",
                  "_verses": "16"
               },
               {
                  "_number": "17",
                  "_verses": "27"
               },
               {
                  "_number": "18",
                  "_verses": "33"
               },
               {
                  "_number": "19",
                  "_verses": "38"
               },
               {
                  "_number": "20",
                  "_verses": "18"
               },
               {
                  "_number": "21",
                  "_verses": "34"
               },
               {
                  "_number": "22",
                  "_verses": "24"
               },
               {
                  "_number": "23",
                  "_verses": "20"
               },
               {
                  "_number": "24",
                  "_verses": "67"
               },
               {
                  "_number": "25",
                  "_verses": "34"
               },
               {
                  "_number": "26",
                  "_verses": "35"
               },
               {
                  "_number": "27",
                  "_verses": "46"
               },
               {
                  "_number": "28",
                  "_verses": "22"
               },
               {
                  "_number": "29",
                  "_verses": "35"
               },
               {
                  "_number": "30",
                  "_verses": "43"
               },
               {
                  "_number": "31",
                  "_verses": "55"
               },
               {
                  "_number": "32",
                  "_verses": "32"
               },
               {
                  "_number": "33",
                  "_verses": "20"
               },
               {
                  "_number": "34",
                  "_verses": "31"
               },
               {
                  "_number": "35",
                  "_verses": "29"
               },
               {
                  "_number": "36",
                  "_verses": "43"
               },
               {
                  "_number": "37",
                  "_verses": "36"
               },
               {
                  "_number": "38",
                  "_verses": "30"
               },
               {
                  "_number": "39",
                  "_verses": "23"
               },
               {
                  "_number": "40",
                  "_verses": "23"
               },
               {
                  "_number": "41",
                  "_verses": "57"
               },
               {
                  "_number": "42",
                  "_verses": "38"
               },
               {
                  "_number": "43",
                  "_verses": "34"
               },
               {
                  "_number": "44",
                  "_verses": "34"
               },
               {
                  "_number": "45",
                  "_verses": "28"
               },
               {
                  "_number": "46",
                  "_verses": "34"
               },
               {
                  "_number": "47",
                  "_verses": "31"
               },
               {
                  "_number": "48",
                  "_verses": "22"
               },
               {
                  "_number": "49",
                  "_verses": "33"
               },
               {
                  "_number": "50",
                  "_verses": "26"
               }
            ],
            "_id": "Genesis",
            "_number": "1"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "22"
               },
               {
                  "_number": "2",
                  "_verses": "25"
               },
               {
                  "_number": "3",
                  "_verses": "22"
               },
               {
                  "_number": "4",
                  "_verses": "31"
               },
               {
                  "_number": "5",
                  "_verses": "23"
               },
               {
                  "_number": "6",
                  "_verses": "30"
               },
               {
                  "_number": "7",
                  "_verses": "25"
               },
               {
                  "_number": "8",
                  "_verses": "32"
               },
               {
                  "_number": "9",
                  "_verses": "35"
               },
               {
                  "_number": "10",
                  "_verses": "29"
               },
               {
                  "_number": "11",
                  "_verses": "10"
               },
               {
                  "_number": "12",
                  "_verses": "51"
               },
               {
                  "_number": "13",
                  "_verses": "22"
               },
               {
                  "_number": "14",
                  "_verses": "31"
               },
               {
                  "_number": "15",
                  "_verses": "27"
               },
               {
                  "_number": "16",
                  "_verses": "36"
               },
               {
                  "_number": "17",
                  "_verses": "16"
               },
               {
                  "_number": "18",
                  "_verses": "27"
               },
               {
                  "_number": "19",
                  "_verses": "25"
               },
               {
                  "_number": "20",
                  "_verses": "26"
               },
               {
                  "_number": "21",
                  "_verses": "36"
               },
               {
                  "_number": "22",
                  "_verses": "31"
               },
               {
                  "_number": "23",
                  "_verses": "33"
               },
               {
                  "_number": "24",
                  "_verses": "18"
               },
               {
                  "_number": "25",
                  "_verses": "40"
               },
               {
                  "_number": "26",
                  "_verses": "37"
               },
               {
                  "_number": "27",
                  "_verses": "21"
               },
               {
                  "_number": "28",
                  "_verses": "43"
               },
               {
                  "_number": "29",
                  "_verses": "46"
               },
               {
                  "_number": "30",
                  "_verses": "38"
               },
               {
                  "_number": "31",
                  "_verses": "18"
               },
               {
                  "_number": "32",
                  "_verses": "35"
               },
               {
                  "_number": "33",
                  "_verses": "23"
               },
               {
                  "_number": "34",
                  "_verses": "35"
               },
               {
                  "_number": "35",
                  "_verses": "35"
               },
               {
                  "_number": "36",
                  "_verses": "38"
               },
               {
                  "_number": "37",
                  "_verses": "29"
               },
               {
                  "_number": "38",
                  "_verses": "31"
               },
               {
                  "_number": "39",
                  "_verses": "43"
               },
               {
                  "_number": "40",
                  "_verses": "38"
               }
            ],
            "_id": "Exodus",
            "_number": "2"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "17"
               },
               {
                  "_number": "2",
                  "_verses": "16"
               },
               {
                  "_number": "3",
                  "_verses": "17"
               },
               {
                  "_number": "4",
                  "_verses": "35"
               },
               {
                  "_number": "5",
                  "_verses": "19"
               },
               {
                  "_number": "6",
                  "_verses": "30"
               },
               {
                  "_number": "7",
                  "_verses": "38"
               },
               {
                  "_number": "8",
                  "_verses": "36"
               },
               {
                  "_number": "9",
                  "_verses": "24"
               },
               {
                  "_number": "10",
                  "_verses": "20"
               },
               {
                  "_number": "11",
                  "_verses": "47"
               },
               {
                  "_number": "12",
                  "_verses": "8"
               },
               {
                  "_number": "13",
                  "_verses": "59"
               },
               {
                  "_number": "14",
                  "_verses": "57"
               },
               {
                  "_number": "15",
                  "_verses": "33"
               },
               {
                  "_number": "16",
                  "_verses": "34"
               },
               {
                  "_number": "17",
                  "_verses": "16"
               },
               {
                  "_number": "18",
                  "_verses": "30"
               },
               {
                  "_number": "19",
                  "_verses": "37"
               },
               {
                  "_number": "20",
                  "_verses": "27"
               },
               {
                  "_number": "21",
                  "_verses": "24"
               },
               {
                  "_number": "22",
                  "_verses": "33"
               },
               {
                  "_number": "23",
                  "_verses": "44"
               },
               {
                  "_number": "24",
                  "_verses": "23"
               },
               {
                  "_number": "25",
                  "_verses": "55"
               },
               {
                  "_number": "26",
                  "_verses": "46"
               },
               {
                  "_number": "27",
                  "_verses": "34"
               }
            ],
            "_id": "Leviticus",
            "_number": "3"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "54"
               },
               {
                  "_number": "2",
                  "_verses": "34"
               },
               {
                  "_number": "3",
                  "_verses": "51"
               },
               {
                  "_number": "4",
                  "_verses": "49"
               },
               {
                  "_number": "5",
                  "_verses": "31"
               },
               {
                  "_number": "6",
                  "_verses": "27"
               },
               {
                  "_number": "7",
                  "_verses": "89"
               },
               {
                  "_number": "8",
                  "_verses": "26"
               },
               {
                  "_number": "9",
                  "_verses": "23"
               },
               {
                  "_number": "10",
                  "_verses": "36"
               },
               {
                  "_number": "11",
                  "_verses": "35"
               },
               {
                  "_number": "12",
                  "_verses": "16"
               },
               {
                  "_number": "13",
                  "_verses": "33"
               },
               {
                  "_number": "14",
                  "_verses": "45"
               },
               {
                  "_number": "15",
                  "_verses": "41"
               },
               {
                  "_number": "16",
                  "_verses": "50"
               },
               {
                  "_number": "17",
                  "_verses": "13"
               },
               {
                  "_number": "18",
                  "_verses": "32"
               },
               {
                  "_number": "19",
                  "_verses": "22"
               },
               {
                  "_number": "20",
                  "_verses": "29"
               },
               {
                  "_number": "21",
                  "_verses": "35"
               },
               {
                  "_number": "22",
                  "_verses": "41"
               },
               {
                  "_number": "23",
                  "_verses": "30"
               },
               {
                  "_number": "24",
                  "_verses": "25"
               },
               {
                  "_number": "25",
                  "_verses": "18"
               },
               {
                  "_number": "26",
                  "_verses": "65"
               },
               {
                  "_number": "27",
                  "_verses": "23"
               },
               {
                  "_number": "28",
                  "_verses": "31"
               },
               {
                  "_number": "29",
                  "_verses": "40"
               },
               {
                  "_number": "30",
                  "_verses": "16"
               },
               {
                  "_number": "31",
                  "_verses": "54"
               },
               {
                  "_number": "32",
                  "_verses": "42"
               },
               {
                  "_number": "33",
                  "_verses": "56"
               },
               {
                  "_number": "34",
                  "_verses": "29"
               },
               {
                  "_number": "35",
                  "_verses": "34"
               },
               {
                  "_number": "36",
                  "_verses": "13"
               }
            ],
            "_id": "Numbers",
            "_number": "4"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "46"
               },
               {
                  "_number": "2",
                  "_verses": "37"
               },
               {
                  "_number": "3",
                  "_verses": "29"
               },
               {
                  "_number": "4",
                  "_verses": "49"
               },
               {
                  "_number": "5",
                  "_verses": "33"
               },
               {
                  "_number": "6",
                  "_verses": "25"
               },
               {
                  "_number": "7",
                  "_verses": "26"
               },
               {
                  "_number": "8",
                  "_verses": "20"
               },
               {
                  "_number": "9",
                  "_verses": "29"
               },
               {
                  "_number": "10",
                  "_verses": "22"
               },
               {
                  "_number": "11",
                  "_verses": "32"
               },
               {
                  "_number": "12",
                  "_verses": "32"
               },
               {
                  "_number": "13",
                  "_verses": "18"
               },
               {
                  "_number": "14",
                  "_verses": "29"
               },
               {
                  "_number": "15",
                  "_verses": "23"
               },
               {
                  "_number": "16",
                  "_verses": "22"
               },
               {
                  "_number": "17",
                  "_verses": "20"
               },
               {
                  "_number": "18",
                  "_verses": "22"
               },
               {
                  "_number": "19",
                  "_verses": "21"
               },
               {
                  "_number": "20",
                  "_verses": "20"
               },
               {
                  "_number": "21",
                  "_verses": "23"
               },
               {
                  "_number": "22",
                  "_verses": "30"
               },
               {
                  "_number": "23",
                  "_verses": "25"
               },
               {
                  "_number": "24",
                  "_verses": "22"
               },
               {
                  "_number": "25",
                  "_verses": "19"
               },
               {
                  "_number": "26",
                  "_verses": "19"
               },
               {
                  "_number": "27",
                  "_verses": "26"
               },
               {
                  "_number": "28",
                  "_verses": "68"
               },
               {
                  "_number": "29",
                  "_verses": "29"
               },
               {
                  "_number": "30",
                  "_verses": "20"
               },
               {
                  "_number": "31",
                  "_verses": "30"
               },
               {
                  "_number": "32",
                  "_verses": "52"
               },
               {
                  "_number": "33",
                  "_verses": "29"
               },
               {
                  "_number": "34",
                  "_verses": "12"
               }
            ],
            "_id": "Deuteronomy",
            "_number": "5"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "18"
               },
               {
                  "_number": "2",
                  "_verses": "24"
               },
               {
                  "_number": "3",
                  "_verses": "17"
               },
               {
                  "_number": "4",
                  "_verses": "24"
               },
               {
                  "_number": "5",
                  "_verses": "15"
               },
               {
                  "_number": "6",
                  "_verses": "27"
               },
               {
                  "_number": "7",
                  "_verses": "26"
               },
               {
                  "_number": "8",
                  "_verses": "35"
               },
               {
                  "_number": "9",
                  "_verses": "27"
               },
               {
                  "_number": "10",
                  "_verses": "43"
               },
               {
                  "_number": "11",
                  "_verses": "23"
               },
               {
                  "_number": "12",
                  "_verses": "24"
               },
               {
                  "_number": "13",
                  "_verses": "33"
               },
               {
                  "_number": "14",
                  "_verses": "15"
               },
               {
                  "_number": "15",
                  "_verses": "63"
               },
               {
                  "_number": "16",
                  "_verses": "10"
               },
               {
                  "_number": "17",
                  "_verses": "18"
               },
               {
                  "_number": "18",
                  "_verses": "28"
               },
               {
                  "_number": "19",
                  "_verses": "51"
               },
               {
                  "_number": "20",
                  "_verses": "9"
               },
               {
                  "_number": "21",
                  "_verses": "45"
               },
               {
                  "_number": "22",
                  "_verses": "34"
               },
               {
                  "_number": "23",
                  "_verses": "16"
               },
               {
                  "_number": "24",
                  "_verses": "33"
               }
            ],
            "_id": "Joshua",
            "_number": "6"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "36"
               },
               {
                  "_number": "2",
                  "_verses": "23"
               },
               {
                  "_number": "3",
                  "_verses": "31"
               },
               {
                  "_number": "4",
                  "_verses": "24"
               },
               {
                  "_number": "5",
                  "_verses": "31"
               },
               {
                  "_number": "6",
                  "_verses": "40"
               },
               {
                  "_number": "7",
                  "_verses": "25"
               },
               {
                  "_number": "8",
                  "_verses": "35"
               },
               {
                  "_number": "9",
                  "_verses": "57"
               },
               {
                  "_number": "10",
                  "_verses": "18"
               },
               {
                  "_number": "11",
                  "_verses": "40"
               },
               {
                  "_number": "12",
                  "_verses": "15"
               },
               {
                  "_number": "13",
                  "_verses": "25"
               },
               {
                  "_number": "14",
                  "_verses": "20"
               },
               {
                  "_number": "15",
                  "_verses": "20"
               },
               {
                  "_number": "16",
                  "_verses": "31"
               },
               {
                  "_number": "17",
                  "_verses": "13"
               },
               {
                  "_number": "18",
                  "_verses": "31"
               },
               {
                  "_number": "19",
                  "_verses": "30"
               },
               {
                  "_number": "20",
                  "_verses": "48"
               },
               {
                  "_number": "21",
                  "_verses": "25"
               }
            ],
            "_id": "Judges",
            "_number": "7"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "22"
               },
               {
                  "_number": "2",
                  "_verses": "23"
               },
               {
                  "_number": "3",
                  "_verses": "18"
               },
               {
                  "_number": "4",
                  "_verses": "22"
               }
            ],
            "_id": "Ruth",
            "_number": "8"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "28"
               },
               {
                  "_number": "2",
                  "_verses": "36"
               },
               {
                  "_number": "3",
                  "_verses": "21"
               },
               {
                  "_number": "4",
                  "_verses": "22"
               },
               {
                  "_number": "5",
                  "_verses": "12"
               },
               {
                  "_number": "6",
                  "_verses": "21"
               },
               {
                  "_number": "7",
                  "_verses": "17"
               },
               {
                  "_number": "8",
                  "_verses": "22"
               },
               {
                  "_number": "9",
                  "_verses": "27"
               },
               {
                  "_number": "10",
                  "_verses": "27"
               },
               {
                  "_number": "11",
                  "_verses": "15"
               },
               {
                  "_number": "12",
                  "_verses": "25"
               },
               {
                  "_number": "13",
                  "_verses": "23"
               },
               {
                  "_number": "14",
                  "_verses": "52"
               },
               {
                  "_number": "15",
                  "_verses": "35"
               },
               {
                  "_number": "16",
                  "_verses": "23"
               },
               {
                  "_number": "17",
                  "_verses": "58"
               },
               {
                  "_number": "18",
                  "_verses": "30"
               },
               {
                  "_number": "19",
                  "_verses": "24"
               },
               {
                  "_number": "20",
                  "_verses": "42"
               },
               {
                  "_number": "21",
                  "_verses": "15"
               },
               {
                  "_number": "22",
                  "_verses": "23"
               },
               {
                  "_number": "23",
                  "_verses": "29"
               },
               {
                  "_number": "24",
                  "_verses": "22"
               },
               {
                  "_number": "25",
                  "_verses": "44"
               },
               {
                  "_number": "26",
                  "_verses": "25"
               },
               {
                  "_number": "27",
                  "_verses": "12"
               },
               {
                  "_number": "28",
                  "_verses": "25"
               },
               {
                  "_number": "29",
                  "_verses": "11"
               },
               {
                  "_number": "30",
                  "_verses": "31"
               },
               {
                  "_number": "31",
                  "_verses": "13"
               }
            ],
            "_id": "1Samuel",
            "_number": "9"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "27"
               },
               {
                  "_number": "2",
                  "_verses": "32"
               },
               {
                  "_number": "3",
                  "_verses": "39"
               },
               {
                  "_number": "4",
                  "_verses": "12"
               },
               {
                  "_number": "5",
                  "_verses": "25"
               },
               {
                  "_number": "6",
                  "_verses": "23"
               },
               {
                  "_number": "7",
                  "_verses": "29"
               },
               {
                  "_number": "8",
                  "_verses": "18"
               },
               {
                  "_number": "9",
                  "_verses": "13"
               },
               {
                  "_number": "10",
                  "_verses": "19"
               },
               {
                  "_number": "11",
                  "_verses": "27"
               },
               {
                  "_number": "12",
                  "_verses": "31"
               },
               {
                  "_number": "13",
                  "_verses": "39"
               },
               {
                  "_number": "14",
                  "_verses": "33"
               },
               {
                  "_number": "15",
                  "_verses": "37"
               },
               {
                  "_number": "16",
                  "_verses": "23"
               },
               {
                  "_number": "17",
                  "_verses": "29"
               },
               {
                  "_number": "18",
                  "_verses": "33"
               },
               {
                  "_number": "19",
                  "_verses": "43"
               },
               {
                  "_number": "20",
                  "_verses": "26"
               },
               {
                  "_number": "21",
                  "_verses": "22"
               },
               {
                  "_number": "22",
                  "_verses": "51"
               },
               {
                  "_number": "23",
                  "_verses": "39"
               },
               {
                  "_number": "24",
                  "_verses": "25"
               }
            ],
            "_id": "2Samuel",
            "_number": "10"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "53"
               },
               {
                  "_number": "2",
                  "_verses": "46"
               },
               {
                  "_number": "3",
                  "_verses": "28"
               },
               {
                  "_number": "4",
                  "_verses": "34"
               },
               {
                  "_number": "5",
                  "_verses": "18"
               },
               {
                  "_number": "6",
                  "_verses": "38"
               },
               {
                  "_number": "7",
                  "_verses": "51"
               },
               {
                  "_number": "8",
                  "_verses": "66"
               },
               {
                  "_number": "9",
                  "_verses": "28"
               },
               {
                  "_number": "10",
                  "_verses": "29"
               },
               {
                  "_number": "11",
                  "_verses": "43"
               },
               {
                  "_number": "12",
                  "_verses": "33"
               },
               {
                  "_number": "13",
                  "_verses": "34"
               },
               {
                  "_number": "14",
                  "_verses": "31"
               },
               {
                  "_number": "15",
                  "_verses": "34"
               },
               {
                  "_number": "16",
                  "_verses": "34"
               },
               {
                  "_number": "17",
                  "_verses": "24"
               },
               {
                  "_number": "18",
                  "_verses": "46"
               },
               {
                  "_number": "19",
                  "_verses": "21"
               },
               {
                  "_number": "20",
                  "_verses": "43"
               },
               {
                  "_number": "21",
                  "_verses": "29"
               },
               {
                  "_number": "22",
                  "_verses": "53"
               }
            ],
            "_id": "1Kings",
            "_number": "11"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "18"
               },
               {
                  "_number": "2",
                  "_verses": "25"
               },
               {
                  "_number": "3",
                  "_verses": "27"
               },
               {
                  "_number": "4",
                  "_verses": "44"
               },
               {
                  "_number": "5",
                  "_verses": "27"
               },
               {
                  "_number": "6",
                  "_verses": "33"
               },
               {
                  "_number": "7",
                  "_verses": "20"
               },
               {
                  "_number": "8",
                  "_verses": "29"
               },
               {
                  "_number": "9",
                  "_verses": "37"
               },
               {
                  "_number": "10",
                  "_verses": "36"
               },
               {
                  "_number": "11",
                  "_verses": "21"
               },
               {
                  "_number": "12",
                  "_verses": "21"
               },
               {
                  "_number": "13",
                  "_verses": "25"
               },
               {
                  "_number": "14",
                  "_verses": "29"
               },
               {
                  "_number": "15",
                  "_verses": "38"
               },
               {
                  "_number": "16",
                  "_verses": "20"
               },
               {
                  "_number": "17",
                  "_verses": "41"
               },
               {
                  "_number": "18",
                  "_verses": "37"
               },
               {
                  "_number": "19",
                  "_verses": "37"
               },
               {
                  "_number": "20",
                  "_verses": "21"
               },
               {
                  "_number": "21",
                  "_verses": "26"
               },
               {
                  "_number": "22",
                  "_verses": "20"
               },
               {
                  "_number": "23",
                  "_verses": "37"
               },
               {
                  "_number": "24",
                  "_verses": "20"
               },
               {
                  "_number": "25",
                  "_verses": "30"
               }
            ],
            "_id": "2Kings",
            "_number": "12"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "54"
               },
               {
                  "_number": "2",
                  "_verses": "55"
               },
               {
                  "_number": "3",
                  "_verses": "24"
               },
               {
                  "_number": "4",
                  "_verses": "43"
               },
               {
                  "_number": "5",
                  "_verses": "26"
               },
               {
                  "_number": "6",
                  "_verses": "81"
               },
               {
                  "_number": "7",
                  "_verses": "40"
               },
               {
                  "_number": "8",
                  "_verses": "40"
               },
               {
                  "_number": "9",
                  "_verses": "44"
               },
               {
                  "_number": "10",
                  "_verses": "14"
               },
               {
                  "_number": "11",
                  "_verses": "47"
               },
               {
                  "_number": "12",
                  "_verses": "40"
               },
               {
                  "_number": "13",
                  "_verses": "14"
               },
               {
                  "_number": "14",
                  "_verses": "17"
               },
               {
                  "_number": "15",
                  "_verses": "29"
               },
               {
                  "_number": "16",
                  "_verses": "43"
               },
               {
                  "_number": "17",
                  "_verses": "27"
               },
               {
                  "_number": "18",
                  "_verses": "17"
               },
               {
                  "_number": "19",
                  "_verses": "19"
               },
               {
                  "_number": "20",
                  "_verses": "8"
               },
               {
                  "_number": "21",
                  "_verses": "30"
               },
               {
                  "_number": "22",
                  "_verses": "19"
               },
               {
                  "_number": "23",
                  "_verses": "32"
               },
               {
                  "_number": "24",
                  "_verses": "31"
               },
               {
                  "_number": "25",
                  "_verses": "31"
               },
               {
                  "_number": "26",
                  "_verses": "32"
               },
               {
                  "_number": "27",
                  "_verses": "34"
               },
               {
                  "_number": "28",
                  "_verses": "21"
               },
               {
                  "_number": "29",
                  "_verses": "30"
               }
            ],
            "_id": "1Chronicles",
            "_number": "13"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "17"
               },
               {
                  "_number": "2",
                  "_verses": "18"
               },
               {
                  "_number": "3",
                  "_verses": "17"
               },
               {
                  "_number": "4",
                  "_verses": "22"
               },
               {
                  "_number": "5",
                  "_verses": "14"
               },
               {
                  "_number": "6",
                  "_verses": "42"
               },
               {
                  "_number": "7",
                  "_verses": "22"
               },
               {
                  "_number": "8",
                  "_verses": "18"
               },
               {
                  "_number": "9",
                  "_verses": "31"
               },
               {
                  "_number": "10",
                  "_verses": "19"
               },
               {
                  "_number": "11",
                  "_verses": "23"
               },
               {
                  "_number": "12",
                  "_verses": "16"
               },
               {
                  "_number": "13",
                  "_verses": "22"
               },
               {
                  "_number": "14",
                  "_verses": "15"
               },
               {
                  "_number": "15",
                  "_verses": "19"
               },
               {
                  "_number": "16",
                  "_verses": "14"
               },
               {
                  "_number": "17",
                  "_verses": "19"
               },
               {
                  "_number": "18",
                  "_verses": "34"
               },
               {
                  "_number": "19",
                  "_verses": "11"
               },
               {
                  "_number": "20",
                  "_verses": "37"
               },
               {
                  "_number": "21",
                  "_verses": "20"
               },
               {
                  "_number": "22",
                  "_verses": "12"
               },
               {
                  "_number": "23",
                  "_verses": "21"
               },
               {
                  "_number": "24",
                  "_verses": "27"
               },
               {
                  "_number": "25",
                  "_verses": "28"
               },
               {
                  "_number": "26",
                  "_verses": "23"
               },
               {
                  "_number": "27",
                  "_verses": "9"
               },
               {
                  "_number": "28",
                  "_verses": "27"
               },
               {
                  "_number": "29",
                  "_verses": "36"
               },
               {
                  "_number": "30",
                  "_verses": "27"
               },
               {
                  "_number": "31",
                  "_verses": "21"
               },
               {
                  "_number": "32",
                  "_verses": "33"
               },
               {
                  "_number": "33",
                  "_verses": "25"
               },
               {
                  "_number": "34",
                  "_verses": "33"
               },
               {
                  "_number": "35",
                  "_verses": "27"
               },
               {
                  "_number": "36",
                  "_verses": "23"
               }
            ],
            "_id": "2Chronicles",
            "_number": "14"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "11"
               },
               {
                  "_number": "2",
                  "_verses": "70"
               },
               {
                  "_number": "3",
                  "_verses": "13"
               },
               {
                  "_number": "4",
                  "_verses": "24"
               },
               {
                  "_number": "5",
                  "_verses": "17"
               },
               {
                  "_number": "6",
                  "_verses": "22"
               },
               {
                  "_number": "7",
                  "_verses": "28"
               },
               {
                  "_number": "8",
                  "_verses": "36"
               },
               {
                  "_number": "9",
                  "_verses": "15"
               },
               {
                  "_number": "10",
                  "_verses": "44"
               }
            ],
            "_id": "Ezra",
            "_number": "15"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "11"
               },
               {
                  "_number": "2",
                  "_verses": "20"
               },
               {
                  "_number": "3",
                  "_verses": "32"
               },
               {
                  "_number": "4",
                  "_verses": "23"
               },
               {
                  "_number": "5",
                  "_verses": "19"
               },
               {
                  "_number": "6",
                  "_verses": "19"
               },
               {
                  "_number": "7",
                  "_verses": "73"
               },
               {
                  "_number": "8",
                  "_verses": "18"
               },
               {
                  "_number": "9",
                  "_verses": "38"
               },
               {
                  "_number": "10",
                  "_verses": "39"
               },
               {
                  "_number": "11",
                  "_verses": "36"
               },
               {
                  "_number": "12",
                  "_verses": "47"
               },
               {
                  "_number": "13",
                  "_verses": "31"
               }
            ],
            "_id": "Nehemiah",
            "_number": "16"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "22"
               },
               {
                  "_number": "2",
                  "_verses": "23"
               },
               {
                  "_number": "3",
                  "_verses": "15"
               },
               {
                  "_number": "4",
                  "_verses": "17"
               },
               {
                  "_number": "5",
                  "_verses": "14"
               },
               {
                  "_number": "6",
                  "_verses": "14"
               },
               {
                  "_number": "7",
                  "_verses": "10"
               },
               {
                  "_number": "8",
                  "_verses": "17"
               },
               {
                  "_number": "9",
                  "_verses": "32"
               },
               {
                  "_number": "10",
                  "_verses": "3"
               }
            ],
            "_id": "Esther",
            "_number": "17"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "22"
               },
               {
                  "_number": "2",
                  "_verses": "13"
               },
               {
                  "_number": "3",
                  "_verses": "26"
               },
               {
                  "_number": "4",
                  "_verses": "21"
               },
               {
                  "_number": "5",
                  "_verses": "27"
               },
               {
                  "_number": "6",
                  "_verses": "30"
               },
               {
                  "_number": "7",
                  "_verses": "21"
               },
               {
                  "_number": "8",
                  "_verses": "22"
               },
               {
                  "_number": "9",
                  "_verses": "35"
               },
               {
                  "_number": "10",
                  "_verses": "22"
               },
               {
                  "_number": "11",
                  "_verses": "20"
               },
               {
                  "_number": "12",
                  "_verses": "25"
               },
               {
                  "_number": "13",
                  "_verses": "28"
               },
               {
                  "_number": "14",
                  "_verses": "22"
               },
               {
                  "_number": "15",
                  "_verses": "35"
               },
               {
                  "_number": "16",
                  "_verses": "22"
               },
               {
                  "_number": "17",
                  "_verses": "16"
               },
               {
                  "_number": "18",
                  "_verses": "21"
               },
               {
                  "_number": "19",
                  "_verses": "29"
               },
               {
                  "_number": "20",
                  "_verses": "29"
               },
               {
                  "_number": "21",
                  "_verses": "34"
               },
               {
                  "_number": "22",
                  "_verses": "30"
               },
               {
                  "_number": "23",
                  "_verses": "17"
               },
               {
                  "_number": "24",
                  "_verses": "25"
               },
               {
                  "_number": "25",
                  "_verses": "6"
               },
               {
                  "_number": "26",
                  "_verses": "14"
               },
               {
                  "_number": "27",
                  "_verses": "23"
               },
               {
                  "_number": "28",
                  "_verses": "28"
               },
               {
                  "_number": "29",
                  "_verses": "25"
               },
               {
                  "_number": "30",
                  "_verses": "31"
               },
               {
                  "_number": "31",
                  "_verses": "40"
               },
               {
                  "_number": "32",
                  "_verses": "22"
               },
               {
                  "_number": "33",
                  "_verses": "33"
               },
               {
                  "_number": "34",
                  "_verses": "37"
               },
               {
                  "_number": "35",
                  "_verses": "16"
               },
               {
                  "_number": "36",
                  "_verses": "33"
               },
               {
                  "_number": "37",
                  "_verses": "24"
               },
               {
                  "_number": "38",
                  "_verses": "41"
               },
               {
                  "_number": "39",
                  "_verses": "30"
               },
               {
                  "_number": "40",
                  "_verses": "24"
               },
               {
                  "_number": "41",
                  "_verses": "34"
               },
               {
                  "_number": "42",
                  "_verses": "17"
               }
            ],
            "_id": "Job",
            "_number": "18"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "6"
               },
               {
                  "_number": "2",
                  "_verses": "12"
               },
               {
                  "_number": "3",
                  "_verses": "8"
               },
               {
                  "_number": "4",
                  "_verses": "8"
               },
               {
                  "_number": "5",
                  "_verses": "12"
               },
               {
                  "_number": "6",
                  "_verses": "10"
               },
               {
                  "_number": "7",
                  "_verses": "17"
               },
               {
                  "_number": "8",
                  "_verses": "9"
               },
               {
                  "_number": "9",
                  "_verses": "20"
               },
               {
                  "_number": "10",
                  "_verses": "18"
               },
               {
                  "_number": "11",
                  "_verses": "7"
               },
               {
                  "_number": "12",
                  "_verses": "8"
               },
               {
                  "_number": "13",
                  "_verses": "6"
               },
               {
                  "_number": "14",
                  "_verses": "7"
               },
               {
                  "_number": "15",
                  "_verses": "5"
               },
               {
                  "_number": "16",
                  "_verses": "11"
               },
               {
                  "_number": "17",
                  "_verses": "15"
               },
               {
                  "_number": "18",
                  "_verses": "50"
               },
               {
                  "_number": "19",
                  "_verses": "14"
               },
               {
                  "_number": "20",
                  "_verses": "9"
               },
               {
                  "_number": "21",
                  "_verses": "13"
               },
               {
                  "_number": "22",
                  "_verses": "31"
               },
               {
                  "_number": "23",
                  "_verses": "6"
               },
               {
                  "_number": "24",
                  "_verses": "10"
               },
               {
                  "_number": "25",
                  "_verses": "22"
               },
               {
                  "_number": "26",
                  "_verses": "12"
               },
               {
                  "_number": "27",
                  "_verses": "14"
               },
               {
                  "_number": "28",
                  "_verses": "9"
               },
               {
                  "_number": "29",
                  "_verses": "11"
               },
               {
                  "_number": "30",
                  "_verses": "12"
               },
               {
                  "_number": "31",
                  "_verses": "24"
               },
               {
                  "_number": "32",
                  "_verses": "11"
               },
               {
                  "_number": "33",
                  "_verses": "22"
               },
               {
                  "_number": "34",
                  "_verses": "22"
               },
               {
                  "_number": "35",
                  "_verses": "28"
               },
               {
                  "_number": "36",
                  "_verses": "12"
               },
               {
                  "_number": "37",
                  "_verses": "40"
               },
               {
                  "_number": "38",
                  "_verses": "22"
               },
               {
                  "_number": "39",
                  "_verses": "13"
               },
               {
                  "_number": "40",
                  "_verses": "17"
               },
               {
                  "_number": "41",
                  "_verses": "13"
               },
               {
                  "_number": "42",
                  "_verses": "11"
               },
               {
                  "_number": "43",
                  "_verses": "5"
               },
               {
                  "_number": "44",
                  "_verses": "26"
               },
               {
                  "_number": "45",
                  "_verses": "17"
               },
               {
                  "_number": "46",
                  "_verses": "11"
               },
               {
                  "_number": "47",
                  "_verses": "9"
               },
               {
                  "_number": "48",
                  "_verses": "14"
               },
               {
                  "_number": "49",
                  "_verses": "20"
               },
               {
                  "_number": "50",
                  "_verses": "23"
               },
               {
                  "_number": "51",
                  "_verses": "19"
               },
               {
                  "_number": "52",
                  "_verses": "9"
               },
               {
                  "_number": "53",
                  "_verses": "6"
               },
               {
                  "_number": "54",
                  "_verses": "7"
               },
               {
                  "_number": "55",
                  "_verses": "23"
               },
               {
                  "_number": "56",
                  "_verses": "13"
               },
               {
                  "_number": "57",
                  "_verses": "11"
               },
               {
                  "_number": "58",
                  "_verses": "11"
               },
               {
                  "_number": "59",
                  "_verses": "17"
               },
               {
                  "_number": "60",
                  "_verses": "12"
               },
               {
                  "_number": "61",
                  "_verses": "8"
               },
               {
                  "_number": "62",
                  "_verses": "12"
               },
               {
                  "_number": "63",
                  "_verses": "11"
               },
               {
                  "_number": "64",
                  "_verses": "10"
               },
               {
                  "_number": "65",
                  "_verses": "13"
               },
               {
                  "_number": "66",
                  "_verses": "20"
               },
               {
                  "_number": "67",
                  "_verses": "7"
               },
               {
                  "_number": "68",
                  "_verses": "35"
               },
               {
                  "_number": "69",
                  "_verses": "36"
               },
               {
                  "_number": "70",
                  "_verses": "5"
               },
               {
                  "_number": "71",
                  "_verses": "24"
               },
               {
                  "_number": "72",
                  "_verses": "20"
               },
               {
                  "_number": "73",
                  "_verses": "28"
               },
               {
                  "_number": "74",
                  "_verses": "23"
               },
               {
                  "_number": "75",
                  "_verses": "10"
               },
               {
                  "_number": "76",
                  "_verses": "12"
               },
               {
                  "_number": "77",
                  "_verses": "20"
               },
               {
                  "_number": "78",
                  "_verses": "72"
               },
               {
                  "_number": "79",
                  "_verses": "13"
               },
               {
                  "_number": "80",
                  "_verses": "19"
               },
               {
                  "_number": "81",
                  "_verses": "16"
               },
               {
                  "_number": "82",
                  "_verses": "8"
               },
               {
                  "_number": "83",
                  "_verses": "18"
               },
               {
                  "_number": "84",
                  "_verses": "12"
               },
               {
                  "_number": "85",
                  "_verses": "13"
               },
               {
                  "_number": "86",
                  "_verses": "17"
               },
               {
                  "_number": "87",
                  "_verses": "7"
               },
               {
                  "_number": "88",
                  "_verses": "18"
               },
               {
                  "_number": "89",
                  "_verses": "52"
               },
               {
                  "_number": "90",
                  "_verses": "17"
               },
               {
                  "_number": "91",
                  "_verses": "16"
               },
               {
                  "_number": "92",
                  "_verses": "15"
               },
               {
                  "_number": "93",
                  "_verses": "5"
               },
               {
                  "_number": "94",
                  "_verses": "23"
               },
               {
                  "_number": "95",
                  "_verses": "11"
               },
               {
                  "_number": "96",
                  "_verses": "13"
               },
               {
                  "_number": "97",
                  "_verses": "12"
               },
               {
                  "_number": "98",
                  "_verses": "9"
               },
               {
                  "_number": "99",
                  "_verses": "9"
               },
               {
                  "_number": "100",
                  "_verses": "5"
               },
               {
                  "_number": "101",
                  "_verses": "8"
               },
               {
                  "_number": "102",
                  "_verses": "28"
               },
               {
                  "_number": "103",
                  "_verses": "22"
               },
               {
                  "_number": "104",
                  "_verses": "35"
               },
               {
                  "_number": "105",
                  "_verses": "45"
               },
               {
                  "_number": "106",
                  "_verses": "48"
               },
               {
                  "_number": "107",
                  "_verses": "43"
               },
               {
                  "_number": "108",
                  "_verses": "13"
               },
               {
                  "_number": "109",
                  "_verses": "31"
               },
               {
                  "_number": "110",
                  "_verses": "7"
               },
               {
                  "_number": "111",
                  "_verses": "10"
               },
               {
                  "_number": "112",
                  "_verses": "10"
               },
               {
                  "_number": "113",
                  "_verses": "9"
               },
               {
                  "_number": "114",
                  "_verses": "8"
               },
               {
                  "_number": "115",
                  "_verses": "18"
               },
               {
                  "_number": "116",
                  "_verses": "19"
               },
               {
                  "_number": "117",
                  "_verses": "2"
               },
               {
                  "_number": "118",
                  "_verses": "29"
               },
               {
                  "_number": "119",
                  "_verses": "176"
               },
               {
                  "_number": "120",
                  "_verses": "7"
               },
               {
                  "_number": "121",
                  "_verses": "8"
               },
               {
                  "_number": "122",
                  "_verses": "9"
               },
               {
                  "_number": "123",
                  "_verses": "4"
               },
               {
                  "_number": "124",
                  "_verses": "8"
               },
               {
                  "_number": "125",
                  "_verses": "5"
               },
               {
                  "_number": "126",
                  "_verses": "6"
               },
               {
                  "_number": "127",
                  "_verses": "5"
               },
               {
                  "_number": "128",
                  "_verses": "6"
               },
               {
                  "_number": "129",
                  "_verses": "8"
               },
               {
                  "_number": "130",
                  "_verses": "8"
               },
               {
                  "_number": "131",
                  "_verses": "3"
               },
               {
                  "_number": "132",
                  "_verses": "18"
               },
               {
                  "_number": "133",
                  "_verses": "3"
               },
               {
                  "_number": "134",
                  "_verses": "3"
               },
               {
                  "_number": "135",
                  "_verses": "21"
               },
               {
                  "_number": "136",
                  "_verses": "26"
               },
               {
                  "_number": "137",
                  "_verses": "9"
               },
               {
                  "_number": "138",
                  "_verses": "8"
               },
               {
                  "_number": "139",
                  "_verses": "24"
               },
               {
                  "_number": "140",
                  "_verses": "13"
               },
               {
                  "_number": "141",
                  "_verses": "10"
               },
               {
                  "_number": "142",
                  "_verses": "7"
               },
               {
                  "_number": "143",
                  "_verses": "12"
               },
               {
                  "_number": "144",
                  "_verses": "15"
               },
               {
                  "_number": "145",
                  "_verses": "21"
               },
               {
                  "_number": "146",
                  "_verses": "10"
               },
               {
                  "_number": "147",
                  "_verses": "20"
               },
               {
                  "_number": "148",
                  "_verses": "14"
               },
               {
                  "_number": "149",
                  "_verses": "9"
               },
               {
                  "_number": "150",
                  "_verses": "6"
               }
            ],
            "_id": "Psalm",
            "_number": "19"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "33"
               },
               {
                  "_number": "2",
                  "_verses": "22"
               },
               {
                  "_number": "3",
                  "_verses": "35"
               },
               {
                  "_number": "4",
                  "_verses": "27"
               },
               {
                  "_number": "5",
                  "_verses": "23"
               },
               {
                  "_number": "6",
                  "_verses": "35"
               },
               {
                  "_number": "7",
                  "_verses": "27"
               },
               {
                  "_number": "8",
                  "_verses": "36"
               },
               {
                  "_number": "9",
                  "_verses": "18"
               },
               {
                  "_number": "10",
                  "_verses": "32"
               },
               {
                  "_number": "11",
                  "_verses": "31"
               },
               {
                  "_number": "12",
                  "_verses": "28"
               },
               {
                  "_number": "13",
                  "_verses": "25"
               },
               {
                  "_number": "14",
                  "_verses": "35"
               },
               {
                  "_number": "15",
                  "_verses": "33"
               },
               {
                  "_number": "16",
                  "_verses": "33"
               },
               {
                  "_number": "17",
                  "_verses": "28"
               },
               {
                  "_number": "18",
                  "_verses": "24"
               },
               {
                  "_number": "19",
                  "_verses": "29"
               },
               {
                  "_number": "20",
                  "_verses": "30"
               },
               {
                  "_number": "21",
                  "_verses": "31"
               },
               {
                  "_number": "22",
                  "_verses": "29"
               },
               {
                  "_number": "23",
                  "_verses": "35"
               },
               {
                  "_number": "24",
                  "_verses": "34"
               },
               {
                  "_number": "25",
                  "_verses": "28"
               },
               {
                  "_number": "26",
                  "_verses": "28"
               },
               {
                  "_number": "27",
                  "_verses": "27"
               },
               {
                  "_number": "28",
                  "_verses": "28"
               },
               {
                  "_number": "29",
                  "_verses": "27"
               },
               {
                  "_number": "30",
                  "_verses": "33"
               },
               {
                  "_number": "31",
                  "_verses": "31"
               }
            ],
            "_id": "Proverbs",
            "_number": "20"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "18"
               },
               {
                  "_number": "2",
                  "_verses": "26"
               },
               {
                  "_number": "3",
                  "_verses": "22"
               },
               {
                  "_number": "4",
                  "_verses": "16"
               },
               {
                  "_number": "5",
                  "_verses": "20"
               },
               {
                  "_number": "6",
                  "_verses": "12"
               },
               {
                  "_number": "7",
                  "_verses": "29"
               },
               {
                  "_number": "8",
                  "_verses": "17"
               },
               {
                  "_number": "9",
                  "_verses": "18"
               },
               {
                  "_number": "10",
                  "_verses": "20"
               },
               {
                  "_number": "11",
                  "_verses": "10"
               },
               {
                  "_number": "12",
                  "_verses": "14"
               }
            ],
            "_id": "Ecclesiastes",
            "_number": "21"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "17"
               },
               {
                  "_number": "2",
                  "_verses": "17"
               },
               {
                  "_number": "3",
                  "_verses": "11"
               },
               {
                  "_number": "4",
                  "_verses": "16"
               },
               {
                  "_number": "5",
                  "_verses": "16"
               },
               {
                  "_number": "6",
                  "_verses": "13"
               },
               {
                  "_number": "7",
                  "_verses": "13"
               },
               {
                  "_number": "8",
                  "_verses": "14"
               }
            ],
            "_id": "SongofSolomon",
            "_number": "22"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "31"
               },
               {
                  "_number": "2",
                  "_verses": "22"
               },
               {
                  "_number": "3",
                  "_verses": "26"
               },
               {
                  "_number": "4",
                  "_verses": "6"
               },
               {
                  "_number": "5",
                  "_verses": "30"
               },
               {
                  "_number": "6",
                  "_verses": "13"
               },
               {
                  "_number": "7",
                  "_verses": "25"
               },
               {
                  "_number": "8",
                  "_verses": "22"
               },
               {
                  "_number": "9",
                  "_verses": "21"
               },
               {
                  "_number": "10",
                  "_verses": "34"
               },
               {
                  "_number": "11",
                  "_verses": "16"
               },
               {
                  "_number": "12",
                  "_verses": "6"
               },
               {
                  "_number": "13",
                  "_verses": "22"
               },
               {
                  "_number": "14",
                  "_verses": "32"
               },
               {
                  "_number": "15",
                  "_verses": "9"
               },
               {
                  "_number": "16",
                  "_verses": "14"
               },
               {
                  "_number": "17",
                  "_verses": "14"
               },
               {
                  "_number": "18",
                  "_verses": "7"
               },
               {
                  "_number": "19",
                  "_verses": "25"
               },
               {
                  "_number": "20",
                  "_verses": "6"
               },
               {
                  "_number": "21",
                  "_verses": "17"
               },
               {
                  "_number": "22",
                  "_verses": "25"
               },
               {
                  "_number": "23",
                  "_verses": "18"
               },
               {
                  "_number": "24",
                  "_verses": "23"
               },
               {
                  "_number": "25",
                  "_verses": "12"
               },
               {
                  "_number": "26",
                  "_verses": "21"
               },
               {
                  "_number": "27",
                  "_verses": "13"
               },
               {
                  "_number": "28",
                  "_verses": "29"
               },
               {
                  "_number": "29",
                  "_verses": "24"
               },
               {
                  "_number": "30",
                  "_verses": "33"
               },
               {
                  "_number": "31",
                  "_verses": "9"
               },
               {
                  "_number": "32",
                  "_verses": "20"
               },
               {
                  "_number": "33",
                  "_verses": "24"
               },
               {
                  "_number": "34",
                  "_verses": "17"
               },
               {
                  "_number": "35",
                  "_verses": "10"
               },
               {
                  "_number": "36",
                  "_verses": "22"
               },
               {
                  "_number": "37",
                  "_verses": "38"
               },
               {
                  "_number": "38",
                  "_verses": "22"
               },
               {
                  "_number": "39",
                  "_verses": "8"
               },
               {
                  "_number": "40",
                  "_verses": "31"
               },
               {
                  "_number": "41",
                  "_verses": "29"
               },
               {
                  "_number": "42",
                  "_verses": "25"
               },
               {
                  "_number": "43",
                  "_verses": "28"
               },
               {
                  "_number": "44",
                  "_verses": "28"
               },
               {
                  "_number": "45",
                  "_verses": "25"
               },
               {
                  "_number": "46",
                  "_verses": "13"
               },
               {
                  "_number": "47",
                  "_verses": "15"
               },
               {
                  "_number": "48",
                  "_verses": "22"
               },
               {
                  "_number": "49",
                  "_verses": "26"
               },
               {
                  "_number": "50",
                  "_verses": "11"
               },
               {
                  "_number": "51",
                  "_verses": "23"
               },
               {
                  "_number": "52",
                  "_verses": "15"
               },
               {
                  "_number": "53",
                  "_verses": "12"
               },
               {
                  "_number": "54",
                  "_verses": "17"
               },
               {
                  "_number": "55",
                  "_verses": "13"
               },
               {
                  "_number": "56",
                  "_verses": "12"
               },
               {
                  "_number": "57",
                  "_verses": "21"
               },
               {
                  "_number": "58",
                  "_verses": "14"
               },
               {
                  "_number": "59",
                  "_verses": "21"
               },
               {
                  "_number": "60",
                  "_verses": "22"
               },
               {
                  "_number": "61",
                  "_verses": "11"
               },
               {
                  "_number": "62",
                  "_verses": "12"
               },
               {
                  "_number": "63",
                  "_verses": "19"
               },
               {
                  "_number": "64",
                  "_verses": "12"
               },
               {
                  "_number": "65",
                  "_verses": "25"
               },
               {
                  "_number": "66",
                  "_verses": "24"
               }
            ],
            "_id": "Isaiah",
            "_number": "23"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "19"
               },
               {
                  "_number": "2",
                  "_verses": "37"
               },
               {
                  "_number": "3",
                  "_verses": "25"
               },
               {
                  "_number": "4",
                  "_verses": "31"
               },
               {
                  "_number": "5",
                  "_verses": "31"
               },
               {
                  "_number": "6",
                  "_verses": "30"
               },
               {
                  "_number": "7",
                  "_verses": "34"
               },
               {
                  "_number": "8",
                  "_verses": "22"
               },
               {
                  "_number": "9",
                  "_verses": "26"
               },
               {
                  "_number": "10",
                  "_verses": "25"
               },
               {
                  "_number": "11",
                  "_verses": "23"
               },
               {
                  "_number": "12",
                  "_verses": "17"
               },
               {
                  "_number": "13",
                  "_verses": "27"
               },
               {
                  "_number": "14",
                  "_verses": "22"
               },
               {
                  "_number": "15",
                  "_verses": "21"
               },
               {
                  "_number": "16",
                  "_verses": "21"
               },
               {
                  "_number": "17",
                  "_verses": "27"
               },
               {
                  "_number": "18",
                  "_verses": "23"
               },
               {
                  "_number": "19",
                  "_verses": "15"
               },
               {
                  "_number": "20",
                  "_verses": "18"
               },
               {
                  "_number": "21",
                  "_verses": "14"
               },
               {
                  "_number": "22",
                  "_verses": "30"
               },
               {
                  "_number": "23",
                  "_verses": "40"
               },
               {
                  "_number": "24",
                  "_verses": "10"
               },
               {
                  "_number": "25",
                  "_verses": "38"
               },
               {
                  "_number": "26",
                  "_verses": "24"
               },
               {
                  "_number": "27",
                  "_verses": "22"
               },
               {
                  "_number": "28",
                  "_verses": "17"
               },
               {
                  "_number": "29",
                  "_verses": "32"
               },
               {
                  "_number": "30",
                  "_verses": "24"
               },
               {
                  "_number": "31",
                  "_verses": "40"
               },
               {
                  "_number": "32",
                  "_verses": "44"
               },
               {
                  "_number": "33",
                  "_verses": "26"
               },
               {
                  "_number": "34",
                  "_verses": "22"
               },
               {
                  "_number": "35",
                  "_verses": "19"
               },
               {
                  "_number": "36",
                  "_verses": "32"
               },
               {
                  "_number": "37",
                  "_verses": "21"
               },
               {
                  "_number": "38",
                  "_verses": "28"
               },
               {
                  "_number": "39",
                  "_verses": "18"
               },
               {
                  "_number": "40",
                  "_verses": "16"
               },
               {
                  "_number": "41",
                  "_verses": "18"
               },
               {
                  "_number": "42",
                  "_verses": "22"
               },
               {
                  "_number": "43",
                  "_verses": "13"
               },
               {
                  "_number": "44",
                  "_verses": "30"
               },
               {
                  "_number": "45",
                  "_verses": "5"
               },
               {
                  "_number": "46",
                  "_verses": "28"
               },
               {
                  "_number": "47",
                  "_verses": "7"
               },
               {
                  "_number": "48",
                  "_verses": "47"
               },
               {
                  "_number": "49",
                  "_verses": "39"
               },
               {
                  "_number": "50",
                  "_verses": "46"
               },
               {
                  "_number": "51",
                  "_verses": "64"
               },
               {
                  "_number": "52",
                  "_verses": "34"
               }
            ],
            "_id": "Jeremiah",
            "_number": "24"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "22"
               },
               {
                  "_number": "2",
                  "_verses": "22"
               },
               {
                  "_number": "3",
                  "_verses": "66"
               },
               {
                  "_number": "4",
                  "_verses": "22"
               },
               {
                  "_number": "5",
                  "_verses": "22"
               }
            ],
            "_id": "Lamentations",
            "_number": "25"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "28"
               },
               {
                  "_number": "2",
                  "_verses": "10"
               },
               {
                  "_number": "3",
                  "_verses": "27"
               },
               {
                  "_number": "4",
                  "_verses": "17"
               },
               {
                  "_number": "5",
                  "_verses": "17"
               },
               {
                  "_number": "6",
                  "_verses": "14"
               },
               {
                  "_number": "7",
                  "_verses": "27"
               },
               {
                  "_number": "8",
                  "_verses": "18"
               },
               {
                  "_number": "9",
                  "_verses": "11"
               },
               {
                  "_number": "10",
                  "_verses": "22"
               },
               {
                  "_number": "11",
                  "_verses": "25"
               },
               {
                  "_number": "12",
                  "_verses": "28"
               },
               {
                  "_number": "13",
                  "_verses": "23"
               },
               {
                  "_number": "14",
                  "_verses": "23"
               },
               {
                  "_number": "15",
                  "_verses": "8"
               },
               {
                  "_number": "16",
                  "_verses": "63"
               },
               {
                  "_number": "17",
                  "_verses": "24"
               },
               {
                  "_number": "18",
                  "_verses": "32"
               },
               {
                  "_number": "19",
                  "_verses": "14"
               },
               {
                  "_number": "20",
                  "_verses": "49"
               },
               {
                  "_number": "21",
                  "_verses": "32"
               },
               {
                  "_number": "22",
                  "_verses": "31"
               },
               {
                  "_number": "23",
                  "_verses": "49"
               },
               {
                  "_number": "24",
                  "_verses": "27"
               },
               {
                  "_number": "25",
                  "_verses": "17"
               },
               {
                  "_number": "26",
                  "_verses": "21"
               },
               {
                  "_number": "27",
                  "_verses": "36"
               },
               {
                  "_number": "28",
                  "_verses": "26"
               },
               {
                  "_number": "29",
                  "_verses": "21"
               },
               {
                  "_number": "30",
                  "_verses": "26"
               },
               {
                  "_number": "31",
                  "_verses": "18"
               },
               {
                  "_number": "32",
                  "_verses": "32"
               },
               {
                  "_number": "33",
                  "_verses": "33"
               },
               {
                  "_number": "34",
                  "_verses": "31"
               },
               {
                  "_number": "35",
                  "_verses": "15"
               },
               {
                  "_number": "36",
                  "_verses": "38"
               },
               {
                  "_number": "37",
                  "_verses": "28"
               },
               {
                  "_number": "38",
                  "_verses": "23"
               },
               {
                  "_number": "39",
                  "_verses": "29"
               },
               {
                  "_number": "40",
                  "_verses": "49"
               },
               {
                  "_number": "41",
                  "_verses": "26"
               },
               {
                  "_number": "42",
                  "_verses": "20"
               },
               {
                  "_number": "43",
                  "_verses": "27"
               },
               {
                  "_number": "44",
                  "_verses": "31"
               },
               {
                  "_number": "45",
                  "_verses": "25"
               },
               {
                  "_number": "46",
                  "_verses": "24"
               },
               {
                  "_number": "47",
                  "_verses": "23"
               },
               {
                  "_number": "48",
                  "_verses": "35"
               }
            ],
            "_id": "Ezekiel",
            "_number": "26"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "21"
               },
               {
                  "_number": "2",
                  "_verses": "49"
               },
               {
                  "_number": "3",
                  "_verses": "30"
               },
               {
                  "_number": "4",
                  "_verses": "37"
               },
               {
                  "_number": "5",
                  "_verses": "31"
               },
               {
                  "_number": "6",
                  "_verses": "28"
               },
               {
                  "_number": "7",
                  "_verses": "28"
               },
               {
                  "_number": "8",
                  "_verses": "27"
               },
               {
                  "_number": "9",
                  "_verses": "27"
               },
               {
                  "_number": "10",
                  "_verses": "21"
               },
               {
                  "_number": "11",
                  "_verses": "45"
               },
               {
                  "_number": "12",
                  "_verses": "13"
               }
            ],
            "_id": "Daniel",
            "_number": "27"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "11"
               },
               {
                  "_number": "2",
                  "_verses": "23"
               },
               {
                  "_number": "3",
                  "_verses": "5"
               },
               {
                  "_number": "4",
                  "_verses": "19"
               },
               {
                  "_number": "5",
                  "_verses": "15"
               },
               {
                  "_number": "6",
                  "_verses": "11"
               },
               {
                  "_number": "7",
                  "_verses": "16"
               },
               {
                  "_number": "8",
                  "_verses": "14"
               },
               {
                  "_number": "9",
                  "_verses": "17"
               },
               {
                  "_number": "10",
                  "_verses": "15"
               },
               {
                  "_number": "11",
                  "_verses": "12"
               },
               {
                  "_number": "12",
                  "_verses": "14"
               },
               {
                  "_number": "13",
                  "_verses": "16"
               },
               {
                  "_number": "14",
                  "_verses": "9"
               }
            ],
            "_id": "Hosea",
            "_number": "28"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "20"
               },
               {
                  "_number": "2",
                  "_verses": "32"
               },
               {
                  "_number": "3",
                  "_verses": "21"
               }
            ],
            "_id": "Joel",
            "_number": "29"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "15"
               },
               {
                  "_number": "2",
                  "_verses": "16"
               },
               {
                  "_number": "3",
                  "_verses": "15"
               },
               {
                  "_number": "4",
                  "_verses": "13"
               },
               {
                  "_number": "5",
                  "_verses": "27"
               },
               {
                  "_number": "6",
                  "_verses": "14"
               },
               {
                  "_number": "7",
                  "_verses": "17"
               },
               {
                  "_number": "8",
                  "_verses": "14"
               },
               {
                  "_number": "9",
                  "_verses": "15"
               }
            ],
            "_id": "Amos",
            "_number": "30"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "21"
               }
            ],
            "_id": "Obadiah",
            "_number": "31"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "17"
               },
               {
                  "_number": "2",
                  "_verses": "10"
               },
               {
                  "_number": "3",
                  "_verses": "10"
               },
               {
                  "_number": "4",
                  "_verses": "11"
               }
            ],
            "_id": "Jonah",
            "_number": "32"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "16"
               },
               {
                  "_number": "2",
                  "_verses": "13"
               },
               {
                  "_number": "3",
                  "_verses": "12"
               },
               {
                  "_number": "4",
                  "_verses": "13"
               },
               {
                  "_number": "5",
                  "_verses": "15"
               },
               {
                  "_number": "6",
                  "_verses": "16"
               },
               {
                  "_number": "7",
                  "_verses": "20"
               }
            ],
            "_id": "Micah",
            "_number": "33"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "15"
               },
               {
                  "_number": "2",
                  "_verses": "13"
               },
               {
                  "_number": "3",
                  "_verses": "19"
               }
            ],
            "_id": "Nahum",
            "_number": "34"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "17"
               },
               {
                  "_number": "2",
                  "_verses": "20"
               },
               {
                  "_number": "3",
                  "_verses": "19"
               }
            ],
            "_id": "Habakkuk",
            "_number": "35"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "18"
               },
               {
                  "_number": "2",
                  "_verses": "15"
               },
               {
                  "_number": "3",
                  "_verses": "20"
               }
            ],
            "_id": "Zephaniah",
            "_number": "36"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "15"
               },
               {
                  "_number": "2",
                  "_verses": "23"
               }
            ],
            "_id": "Haggai",
            "_number": "37"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "21"
               },
               {
                  "_number": "2",
                  "_verses": "13"
               },
               {
                  "_number": "3",
                  "_verses": "10"
               },
               {
                  "_number": "4",
                  "_verses": "14"
               },
               {
                  "_number": "5",
                  "_verses": "11"
               },
               {
                  "_number": "6",
                  "_verses": "15"
               },
               {
                  "_number": "7",
                  "_verses": "14"
               },
               {
                  "_number": "8",
                  "_verses": "23"
               },
               {
                  "_number": "9",
                  "_verses": "17"
               },
               {
                  "_number": "10",
                  "_verses": "12"
               },
               {
                  "_number": "11",
                  "_verses": "17"
               },
               {
                  "_number": "12",
                  "_verses": "14"
               },
               {
                  "_number": "13",
                  "_verses": "9"
               },
               {
                  "_number": "14",
                  "_verses": "21"
               }
            ],
            "_id": "Zechariah",
            "_number": "38"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "14"
               },
               {
                  "_number": "2",
                  "_verses": "17"
               },
               {
                  "_number": "3",
                  "_verses": "18"
               },
               {
                  "_number": "4",
                  "_verses": "6"
               }
            ],
            "_id": "Malachi",
            "_number": "39"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "25"
               },
               {
                  "_number": "2",
                  "_verses": "23"
               },
               {
                  "_number": "3",
                  "_verses": "17"
               },
               {
                  "_number": "4",
                  "_verses": "25"
               },
               {
                  "_number": "5",
                  "_verses": "48"
               },
               {
                  "_number": "6",
                  "_verses": "34"
               },
               {
                  "_number": "7",
                  "_verses": "29"
               },
               {
                  "_number": "8",
                  "_verses": "34"
               },
               {
                  "_number": "9",
                  "_verses": "38"
               },
               {
                  "_number": "10",
                  "_verses": "42"
               },
               {
                  "_number": "11",
                  "_verses": "30"
               },
               {
                  "_number": "12",
                  "_verses": "50"
               },
               {
                  "_number": "13",
                  "_verses": "58"
               },
               {
                  "_number": "14",
                  "_verses": "36"
               },
               {
                  "_number": "15",
                  "_verses": "39"
               },
               {
                  "_number": "16",
                  "_verses": "28"
               },
               {
                  "_number": "17",
                  "_verses": "27"
               },
               {
                  "_number": "18",
                  "_verses": "35"
               },
               {
                  "_number": "19",
                  "_verses": "30"
               },
               {
                  "_number": "20",
                  "_verses": "34"
               },
               {
                  "_number": "21",
                  "_verses": "46"
               },
               {
                  "_number": "22",
                  "_verses": "46"
               },
               {
                  "_number": "23",
                  "_verses": "39"
               },
               {
                  "_number": "24",
                  "_verses": "51"
               },
               {
                  "_number": "25",
                  "_verses": "46"
               },
               {
                  "_number": "26",
                  "_verses": "75"
               },
               {
                  "_number": "27",
                  "_verses": "66"
               },
               {
                  "_number": "28",
                  "_verses": "20"
               }
            ],
            "_id": "Matthew",
            "_number": "40"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "45"
               },
               {
                  "_number": "2",
                  "_verses": "28"
               },
               {
                  "_number": "3",
                  "_verses": "35"
               },
               {
                  "_number": "4",
                  "_verses": "41"
               },
               {
                  "_number": "5",
                  "_verses": "43"
               },
               {
                  "_number": "6",
                  "_verses": "56"
               },
               {
                  "_number": "7",
                  "_verses": "37"
               },
               {
                  "_number": "8",
                  "_verses": "38"
               },
               {
                  "_number": "9",
                  "_verses": "50"
               },
               {
                  "_number": "10",
                  "_verses": "52"
               },
               {
                  "_number": "11",
                  "_verses": "33"
               },
               {
                  "_number": "12",
                  "_verses": "44"
               },
               {
                  "_number": "13",
                  "_verses": "37"
               },
               {
                  "_number": "14",
                  "_verses": "72"
               },
               {
                  "_number": "15",
                  "_verses": "47"
               },
               {
                  "_number": "16",
                  "_verses": "20"
               }
            ],
            "_id": "Mark",
            "_number": "41"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "80"
               },
               {
                  "_number": "2",
                  "_verses": "52"
               },
               {
                  "_number": "3",
                  "_verses": "38"
               },
               {
                  "_number": "4",
                  "_verses": "44"
               },
               {
                  "_number": "5",
                  "_verses": "39"
               },
               {
                  "_number": "6",
                  "_verses": "49"
               },
               {
                  "_number": "7",
                  "_verses": "50"
               },
               {
                  "_number": "8",
                  "_verses": "56"
               },
               {
                  "_number": "9",
                  "_verses": "62"
               },
               {
                  "_number": "10",
                  "_verses": "42"
               },
               {
                  "_number": "11",
                  "_verses": "54"
               },
               {
                  "_number": "12",
                  "_verses": "59"
               },
               {
                  "_number": "13",
                  "_verses": "35"
               },
               {
                  "_number": "14",
                  "_verses": "35"
               },
               {
                  "_number": "15",
                  "_verses": "32"
               },
               {
                  "_number": "16",
                  "_verses": "31"
               },
               {
                  "_number": "17",
                  "_verses": "37"
               },
               {
                  "_number": "18",
                  "_verses": "43"
               },
               {
                  "_number": "19",
                  "_verses": "48"
               },
               {
                  "_number": "20",
                  "_verses": "47"
               },
               {
                  "_number": "21",
                  "_verses": "38"
               },
               {
                  "_number": "22",
                  "_verses": "71"
               },
               {
                  "_number": "23",
                  "_verses": "56"
               },
               {
                  "_number": "24",
                  "_verses": "53"
               }
            ],
            "_id": "Luke",
            "_number": "42"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "51"
               },
               {
                  "_number": "2",
                  "_verses": "25"
               },
               {
                  "_number": "3",
                  "_verses": "36"
               },
               {
                  "_number": "4",
                  "_verses": "54"
               },
               {
                  "_number": "5",
                  "_verses": "47"
               },
               {
                  "_number": "6",
                  "_verses": "71"
               },
               {
                  "_number": "7",
                  "_verses": "53"
               },
               {
                  "_number": "8",
                  "_verses": "59"
               },
               {
                  "_number": "9",
                  "_verses": "41"
               },
               {
                  "_number": "10",
                  "_verses": "42"
               },
               {
                  "_number": "11",
                  "_verses": "57"
               },
               {
                  "_number": "12",
                  "_verses": "50"
               },
               {
                  "_number": "13",
                  "_verses": "38"
               },
               {
                  "_number": "14",
                  "_verses": "31"
               },
               {
                  "_number": "15",
                  "_verses": "27"
               },
               {
                  "_number": "16",
                  "_verses": "33"
               },
               {
                  "_number": "17",
                  "_verses": "26"
               },
               {
                  "_number": "18",
                  "_verses": "40"
               },
               {
                  "_number": "19",
                  "_verses": "42"
               },
               {
                  "_number": "20",
                  "_verses": "31"
               },
               {
                  "_number": "21",
                  "_verses": "25"
               }
            ],
            "_id": "John",
            "_number": "43"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "26"
               },
               {
                  "_number": "2",
                  "_verses": "47"
               },
               {
                  "_number": "3",
                  "_verses": "26"
               },
               {
                  "_number": "4",
                  "_verses": "37"
               },
               {
                  "_number": "5",
                  "_verses": "42"
               },
               {
                  "_number": "6",
                  "_verses": "15"
               },
               {
                  "_number": "7",
                  "_verses": "60"
               },
               {
                  "_number": "8",
                  "_verses": "40"
               },
               {
                  "_number": "9",
                  "_verses": "43"
               },
               {
                  "_number": "10",
                  "_verses": "48"
               },
               {
                  "_number": "11",
                  "_verses": "30"
               },
               {
                  "_number": "12",
                  "_verses": "25"
               },
               {
                  "_number": "13",
                  "_verses": "52"
               },
               {
                  "_number": "14",
                  "_verses": "28"
               },
               {
                  "_number": "15",
                  "_verses": "41"
               },
               {
                  "_number": "16",
                  "_verses": "40"
               },
               {
                  "_number": "17",
                  "_verses": "34"
               },
               {
                  "_number": "18",
                  "_verses": "28"
               },
               {
                  "_number": "19",
                  "_verses": "41"
               },
               {
                  "_number": "20",
                  "_verses": "38"
               },
               {
                  "_number": "21",
                  "_verses": "40"
               },
               {
                  "_number": "22",
                  "_verses": "30"
               },
               {
                  "_number": "23",
                  "_verses": "35"
               },
               {
                  "_number": "24",
                  "_verses": "27"
               },
               {
                  "_number": "25",
                  "_verses": "27"
               },
               {
                  "_number": "26",
                  "_verses": "32"
               },
               {
                  "_number": "27",
                  "_verses": "44"
               },
               {
                  "_number": "28",
                  "_verses": "31"
               }
            ],
            "_id": "Acts",
            "_number": "44"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "32"
               },
               {
                  "_number": "2",
                  "_verses": "29"
               },
               {
                  "_number": "3",
                  "_verses": "31"
               },
               {
                  "_number": "4",
                  "_verses": "25"
               },
               {
                  "_number": "5",
                  "_verses": "21"
               },
               {
                  "_number": "6",
                  "_verses": "23"
               },
               {
                  "_number": "7",
                  "_verses": "25"
               },
               {
                  "_number": "8",
                  "_verses": "39"
               },
               {
                  "_number": "9",
                  "_verses": "33"
               },
               {
                  "_number": "10",
                  "_verses": "21"
               },
               {
                  "_number": "11",
                  "_verses": "36"
               },
               {
                  "_number": "12",
                  "_verses": "21"
               },
               {
                  "_number": "13",
                  "_verses": "14"
               },
               {
                  "_number": "14",
                  "_verses": "23"
               },
               {
                  "_number": "15",
                  "_verses": "33"
               },
               {
                  "_number": "16",
                  "_verses": "27"
               }
            ],
            "_id": "Romans",
            "_number": "45"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "31"
               },
               {
                  "_number": "2",
                  "_verses": "16"
               },
               {
                  "_number": "3",
                  "_verses": "23"
               },
               {
                  "_number": "4",
                  "_verses": "21"
               },
               {
                  "_number": "5",
                  "_verses": "13"
               },
               {
                  "_number": "6",
                  "_verses": "20"
               },
               {
                  "_number": "7",
                  "_verses": "40"
               },
               {
                  "_number": "8",
                  "_verses": "13"
               },
               {
                  "_number": "9",
                  "_verses": "27"
               },
               {
                  "_number": "10",
                  "_verses": "33"
               },
               {
                  "_number": "11",
                  "_verses": "34"
               },
               {
                  "_number": "12",
                  "_verses": "31"
               },
               {
                  "_number": "13",
                  "_verses": "13"
               },
               {
                  "_number": "14",
                  "_verses": "40"
               },
               {
                  "_number": "15",
                  "_verses": "58"
               },
               {
                  "_number": "16",
                  "_verses": "24"
               }
            ],
            "_id": "1Corinthians",
            "_number": "46"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "24"
               },
               {
                  "_number": "2",
                  "_verses": "17"
               },
               {
                  "_number": "3",
                  "_verses": "18"
               },
               {
                  "_number": "4",
                  "_verses": "18"
               },
               {
                  "_number": "5",
                  "_verses": "21"
               },
               {
                  "_number": "6",
                  "_verses": "18"
               },
               {
                  "_number": "7",
                  "_verses": "16"
               },
               {
                  "_number": "8",
                  "_verses": "24"
               },
               {
                  "_number": "9",
                  "_verses": "15"
               },
               {
                  "_number": "10",
                  "_verses": "18"
               },
               {
                  "_number": "11",
                  "_verses": "33"
               },
               {
                  "_number": "12",
                  "_verses": "21"
               },
               {
                  "_number": "13",
                  "_verses": "14"
               }
            ],
            "_id": "2Corinthians",
            "_number": "47"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "24"
               },
               {
                  "_number": "2",
                  "_verses": "21"
               },
               {
                  "_number": "3",
                  "_verses": "29"
               },
               {
                  "_number": "4",
                  "_verses": "31"
               },
               {
                  "_number": "5",
                  "_verses": "26"
               },
               {
                  "_number": "6",
                  "_verses": "18"
               }
            ],
            "_id": "Galatians",
            "_number": "48"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "23"
               },
               {
                  "_number": "2",
                  "_verses": "22"
               },
               {
                  "_number": "3",
                  "_verses": "21"
               },
               {
                  "_number": "4",
                  "_verses": "32"
               },
               {
                  "_number": "5",
                  "_verses": "33"
               },
               {
                  "_number": "6",
                  "_verses": "24"
               }
            ],
            "_id": "Ephesians",
            "_number": "49"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "30"
               },
               {
                  "_number": "2",
                  "_verses": "30"
               },
               {
                  "_number": "3",
                  "_verses": "21"
               },
               {
                  "_number": "4",
                  "_verses": "23"
               }
            ],
            "_id": "Philippians",
            "_number": "50"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "29"
               },
               {
                  "_number": "2",
                  "_verses": "23"
               },
               {
                  "_number": "3",
                  "_verses": "25"
               },
               {
                  "_number": "4",
                  "_verses": "18"
               }
            ],
            "_id": "Colossians",
            "_number": "51"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "10"
               },
               {
                  "_number": "2",
                  "_verses": "20"
               },
               {
                  "_number": "3",
                  "_verses": "13"
               },
               {
                  "_number": "4",
                  "_verses": "18"
               },
               {
                  "_number": "5",
                  "_verses": "28"
               }
            ],
            "_id": "1Thessalonians",
            "_number": "52"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "12"
               },
               {
                  "_number": "2",
                  "_verses": "17"
               },
               {
                  "_number": "3",
                  "_verses": "18"
               }
            ],
            "_id": "2Thessalonians",
            "_number": "53"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "20"
               },
               {
                  "_number": "2",
                  "_verses": "15"
               },
               {
                  "_number": "3",
                  "_verses": "16"
               },
               {
                  "_number": "4",
                  "_verses": "16"
               },
               {
                  "_number": "5",
                  "_verses": "25"
               },
               {
                  "_number": "6",
                  "_verses": "21"
               }
            ],
            "_id": "1Timothy",
            "_number": "54"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "18"
               },
               {
                  "_number": "2",
                  "_verses": "26"
               },
               {
                  "_number": "3",
                  "_verses": "17"
               },
               {
                  "_number": "4",
                  "_verses": "22"
               }
            ],
            "_id": "2Timothy",
            "_number": "55"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "16"
               },
               {
                  "_number": "2",
                  "_verses": "15"
               },
               {
                  "_number": "3",
                  "_verses": "15"
               }
            ],
            "_id": "Titus",
            "_number": "56"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "25"
               }
            ],
            "_id": "Philemon",
            "_number": "57"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "14"
               },
               {
                  "_number": "2",
                  "_verses": "18"
               },
               {
                  "_number": "3",
                  "_verses": "19"
               },
               {
                  "_number": "4",
                  "_verses": "16"
               },
               {
                  "_number": "5",
                  "_verses": "14"
               },
               {
                  "_number": "6",
                  "_verses": "20"
               },
               {
                  "_number": "7",
                  "_verses": "28"
               },
               {
                  "_number": "8",
                  "_verses": "13"
               },
               {
                  "_number": "9",
                  "_verses": "28"
               },
               {
                  "_number": "10",
                  "_verses": "39"
               },
               {
                  "_number": "11",
                  "_verses": "40"
               },
               {
                  "_number": "12",
                  "_verses": "29"
               },
               {
                  "_number": "13",
                  "_verses": "25"
               }
            ],
            "_id": "Hebrews",
            "_number": "58"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "27"
               },
               {
                  "_number": "2",
                  "_verses": "26"
               },
               {
                  "_number": "3",
                  "_verses": "18"
               },
               {
                  "_number": "4",
                  "_verses": "17"
               },
               {
                  "_number": "5",
                  "_verses": "20"
               }
            ],
            "_id": "James",
            "_number": "59"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "25"
               },
               {
                  "_number": "2",
                  "_verses": "25"
               },
               {
                  "_number": "3",
                  "_verses": "22"
               },
               {
                  "_number": "4",
                  "_verses": "19"
               },
               {
                  "_number": "5",
                  "_verses": "14"
               }
            ],
            "_id": "1Peter",
            "_number": "60"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "21"
               },
               {
                  "_number": "2",
                  "_verses": "22"
               },
               {
                  "_number": "3",
                  "_verses": "18"
               }
            ],
            "_id": "2Peter",
            "_number": "61"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "10"
               },
               {
                  "_number": "2",
                  "_verses": "29"
               },
               {
                  "_number": "3",
                  "_verses": "24"
               },
               {
                  "_number": "4",
                  "_verses": "21"
               },
               {
                  "_number": "5",
                  "_verses": "21"
               }
            ],
            "_id": "1John",
            "_number": "62"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "13"
               }
            ],
            "_id": "2John",
            "_number": "63"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "14"
               }
            ],
            "_id": "3John",
            "_number": "64"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "25"
               }
            ],
            "_id": "Jude",
            "_number": "65"
         },
         {
            "chapter": [
               {
                  "_number": "1",
                  "_verses": "20"
               },
               {
                  "_number": "2",
                  "_verses": "29"
               },
               {
                  "_number": "3",
                  "_verses": "22"
               },
               {
                  "_number": "4",
                  "_verses": "11"
               },
               {
                  "_number": "5",
                  "_verses": "14"
               },
               {
                  "_number": "6",
                  "_verses": "17"
               },
               {
                  "_number": "7",
                  "_verses": "17"
               },
               {
                  "_number": "8",
                  "_verses": "13"
               },
               {
                  "_number": "9",
                  "_verses": "21"
               },
               {
                  "_number": "10",
                  "_verses": "11"
               },
               {
                  "_number": "11",
                  "_verses": "19"
               },
               {
                  "_number": "12",
                  "_verses": "17"
               },
               {
                  "_number": "13",
                  "_verses": "18"
               },
               {
                  "_number": "14",
                  "_verses": "20"
               },
               {
                  "_number": "15",
                  "_verses": "8"
               },
               {
                  "_number": "16",
                  "_verses": "21"
               },
               {
                  "_number": "17",
                  "_verses": "18"
               },
               {
                  "_number": "18",
                  "_verses": "24"
               },
               {
                  "_number": "19",
                  "_verses": "21"
               },
               {
                  "_number": "20",
                  "_verses": "15"
               },
               {
                  "_number": "21",
                  "_verses": "27"
               },
               {
                  "_number": "22",
                  "_verses": "21"
               }
            ],
            "_id": "Revelation",
            "_number": "66"
         }
      ]
   }
};

 constructor(private utilities : UtilitiesService ) { 
   this._scheduleDict = JSON.parse(this.getSchedulesJson());
   /*
   utilities.readFile("bookChapter.xml").subscribe(
      (doc) => {
        this._xmlDoc = doc;
      }
   )*/

/*
      utilities.readJsonFile("bookChapter.json").subscribe(
      (doc) => {
        this._doc = doc;
      }
      )
    */
 }

 pad(num, size) {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
 }


// convert date to "mmdd" format
	convertmmdd(date) : string
	{
		var mm = ('0'+(date.getMonth()+1)).substr(-2, 2); // zero padded month
		var dd = ('0'+date.getDate()).substr(-2, 2); // zero padded day
		return mm + dd;
	}

/*
getBookChapterVerseCount(book : string, chapter: number) : number
{
   var key = book.replace('/\s+/g', '');
   let bookElement = this._xmlDoc.getElementById(key);
   if (bookElement != null)
   {
     if (bookElement.children.length >= chapter - 1)
     {
         let chapterNode = bookElement.children[chapter - 1];
         if (chapterNode != null)
         {
           let attribute = chapterNode.attributes.getNamedItem("verses");
           if (attribute != null)
           {
              return Number(attribute.value);
           }
         }
     }
   }
   return 0;
}
*/

getBookChapterVerseCount2(book : string, chapter: number) : number
{
   var key = book.replace('/\s+/g', '');
   let bookIndex = this._bible[key];
   return this._doc.bible.book[bookIndex].chapter[chapter - 1]._verses;
}

  getSchedule1(dateKey : string, date: Date)  {
    return new Promise<Schedule>(resolve => resolve(
        this.toScheduleObject(date)) 
           )
    }

toScheduleObject(date: Date) : Schedule
	{
    let dateKey = this.convertmmdd(date);
 		let verses = this._scheduleDict[dateKey]; // get verses for mmdd

		let schedule = new Schedule();
		schedule.date = date.toLocaleDateString(); 
		schedule.verses = verses;
		var list  = verses.split(";");

		schedule.devotions = list;   		
		return schedule;
	}

  getSchedules() : Schedule[] {
       
       var reviver= (obj) => {
          let schedules = new Array<Schedule>();
          for (let i=1; i <= 12 ; i++)
          {
              let month=this.pad(i, 2);
              let days = 31;
              if (i == 2)
              { 
                days = 28;
              } 
              
              if ([4, 6, 8, 10, 12].some( x=> x === i))
              {
                days = 30;
              }
              for (let j = 1; j<=days ; j++)
              {
                let day = this.pad(j, 2);
                let key = month + day;

              let schedule = new Schedule();
              schedule.date = key
              schedule.verses = obj[key];;
              schedules.push(schedule);
              }
          }
       };

       this._schedules = JSON.parse(this.getSchedulesJson(), reviver); 
       return this._schedules;
  }
  
  getSchedulesJson() : string {
		return  '{"0101":"Psalm 1:1-6;Genesis 1:1-2:25;Matthew 1:1-2:12;Proverbs 1:1-6","0102":"Psalm 2:1-6;Genesis 3:1-4:26;Matthew 2:13-3:6;Proverbs 1:7-9","0103":"Psalm 2:7-12;Genesis 5:1-7:24;Matthew 3:7-4:11;Proverbs 1:10-19","0104":"Psalm 3:1-8;Genesis 8:1-10:32;Matthew 4:12-25;Proverbs 1:20-23","0105":"Psalm 4:1-8;Genesis 11:1-13:5;Matthew 5:1-26;Proverbs 1:24-28","0106":"Psalm 5:1-3;Genesis 13:6-15:21;Matthew 5:27-48;Proverbs 1:29-33","0107":"Psalm 5:4-12;Genesis 16:1-18:19;Matthew 6:1-24;Proverbs 2:1-5","0108":"Psalm 6:1-3;Genesis 18:20-19:38;Matthew 6:25-7:14;Proverbs 2:6-15","0109":"Psalm 6:4-10;Genesis 20:1-22:24;Matthew 7:15-29;Proverbs 2:16-22","0110":"Psalm 7:1-9;Genesis 23:1-24:51;Matthew 8:1-17;Proverbs 3:1-6","0111":"Psalm 7:10-17;Genesis 24:52-26:16;Matthew 8:18-34;Proverbs 3:7-8","0112":"Psalm 8:1-9;Genesis 26:17-27:46;Matthew 9:1-17;Proverbs 3:9-10","0113":"Psalm 9:1-6;Genesis 28:1-29:35;Matthew 9:18-38;Proverbs 3:11-12","0114":"Psalm 9:7-12;Genesis 30:1-31:16;Matthew 10:1-25;Proverbs 3:13-15","0115":"Psalm 9:13-20;Genesis 31:17-32:12;Matthew 10:26-11:6;Proverbs 3:16-18","0116":"Psalm 10:1-10;Genesis 32:13-34:31;Matthew 11:7-30;Proverbs 3:19-20","0117":"Psalm 10:11-15;Genesis 35:1-36:43;Matthew 12:1-21;Proverbs 3:21-26","0118":"Psalm 10:16-18;Genesis 37:1-38:30;Matthew 12:22-45;Proverbs 3:27-32","0119":"Psalm 11:1-7;Genesis 39:1-41:16;Matthew 12:46-13:23;Proverbs 3:33-35","0120":"Psalm 12:1-8;Genesis 41:17-42:17;Matthew 13:24-46;Proverbs 4:1-6","0121":"Psalm 13:1-6;Genesis 42:18-43:34;Matthew 13:47-14:12;Proverbs 4:7-10","0122":"Psalm 14:1-7;Genesis 44:1-45:28;Matthew 14:13-36;Proverbs 4:11-13","0123":"Psalm 15:1-5;Genesis 46:1-47:31;Matthew 15:1-28;Proverbs 4:14-19","0124":"Psalm 16:1-6;Genesis 48:1-49:33;Matthew 15:29-16:12;Proverbs 4:20-27","0125":"Psalm 16:7-11;Genesis 50:1-26;Exodus 1:1-2:10;Matthew 16:13-17:9;Proverbs 5:1-6","0126":"Psalm 17:1-5;Exodus 2:11-3:22;Matthew 17:10-27;Proverbs 5:7-14","0127":"Psalm 17:6-9;Exodus 4:1-5:21;Matthew 18:1-22;Proverbs 5:15-21","0128":"Psalm 17:10-15;Exodus 5:22-7:24;Matthew 18:23-19:12;Proverbs 5:22-23","0129":"Psalm 18:1-6;Exodus 7:25-9:35;Matthew 19:13-30;Proverbs 6:1-5","0130":"Psalm 18:7-15;Exodus 10:1-12:13;Matthew 20:1-28;Proverbs 6:6-11","0131":"Psalm 18:16-24;Exodus 12:14-13:16;Matthew 20:29-21:22;Proverbs 6:12-15","0201":"Psalm 18:25-36;Exodus 13:17-15:18;Matthew 21:23-46;Proverbs 6:16-19","0202":"Psalm 18:37-50;Exodus 15:19-17:7;Matthew 22:1-33;Proverbs 6:20-26","0203":"Psalm 19:1-6;Exodus 17:8-19:15;Matthew 22:34-23:12;Proverbs 6:27-35","0204":"Psalm 19:7-14;Exodus 19:16-21:21;Matthew 23:13-39;Proverbs 7:1-5","0205":"Psalm 20:1-9;Exodus 21:22-23:13;Matthew 24:1-28;Proverbs 7:6-23","0206":"Psalm 21:1-7;Exodus 23:14-25:40;Matthew 24:29-51;Proverbs 7:24-27","0207":"Psalm 21:8-13;Exodus 26:1-27:21;Matthew 25:1-30;Proverbs 8:1-11","0208":"Psalm 22:1-18;Exodus 28:1-43;Matthew 25:31-26:13;Proverbs 8:12-13","0209":"Psalm 22:19-31;Exodus 29:1-30:10;Matthew 26:14-46;Proverbs 8:14-26","0210":"Psalm 23:1-6;Exodus 30:11-31:18;Matthew 26:47-68;Proverbs 8:27-32","0211":"Psalm 24:1-6;Exodus 32:1-33:23;Matthew 26:69-27:14;Proverbs 8:33-36","0212":"Psalm 24:7-10;Exodus 34:1-35:9;Matthew 27:15-31;Proverbs 9:1-6","0213":"Psalm 25:1-7;Exodus 35:10-36:38;Matthew 27:32-66;Proverbs 9:7-8","0214":"Psalm 25:8-15;Exodus 37:1-38:31;Matthew 28:1-20;Proverbs 9:9-10","0215":"Psalm 25:16-22;Exodus 39:1-40:38;Mark 1:1-28;Proverbs 9:11-12","0216":"Psalm 26:1-12;Leviticus 1:1-3:17;Mark 1:29-2:12;Proverbs 9:13-18","0217":"Psalm 27:1-6;Leviticus 4:1-5:19;Mark 2:13-3:6;Proverbs 10:1-2","0218":"Psalm 27:7-14;Leviticus 6:1-7:27;Mark 3:7-30;Proverbs 10:3-4","0219":"Psalm 28:1-9;Leviticus 7:28-9:6;Mark 3:31-4:25;Proverbs 10:5","0220":"Psalm 29:1-11;Leviticus 9:7-10:20;Mark 4:26-5:20;Proverbs 10:6-7","0221":"Psalm 30:1-5;Leviticus 11:1-12:8;Mark 5:21-43;Proverbs 10:8-9","0222":"Psalm 30:6-12;Leviticus 13:1-59;Mark 6:1-29;Proverbs 10:10","0223":"Psalm 31:1-8;Leviticus 14:1-57;Mark 6:30-56;Proverbs 10:11-12","0224":"Psalm 31:9-18;Leviticus 15:1-16:28;Mark 7:1-23;Proverbs 10:13-14","0225":"Psalm 31:19-24;Leviticus 16:29-18:30;Mark 7:24-8:10;Proverbs 10:15-16","0226":"Psalm 32:1-5;Leviticus 19:1-20:21;Mark 8:11-38;Proverbs 10:17","0227":"Psalm 32:6-11;Leviticus 20:22-22:16;Mark 9:1-29;Proverbs 10:18","0228":"Psalm 33:1-11;Leviticus 22:17-23:44;Mark 9:30-10:12;Proverbs 10:19","0229":"Psalm 91:1-16;Genesis 2:1-25;Revelation 21:1-21;Proverbs 6:16-19","0301":"Psalm 33:12-22;Leviticus 24:1-25:46;Mark 10:13-31;Proverbs 10:20-21","0302":"Psalm 34:1-10;Leviticus 25:47-27:13;Mark 10:32-52;Proverbs 10:22","0303":"Psalm 34:11-22;Leviticus 27:14-27:34;Numbers 1:1-1:54;Mark 11:1-26;Proverbs 10:23","0304":"Psalm 35:1-10;Numbers 2:1-3:51;Mark 11:27-12:17;Proverbs 10:24-25","0305":"Psalm 35:11-18;Numbers 4:1-5:31;Mark 12:18-37;Proverbs 10:26","0306":"Psalm 35:19-28;Numbers 6:1-7:89;Mark 12:38-13:13;Proverbs 10:27-28","0307":"Psalm 36:1-12;Numbers 8:1-9:23;Mark 13:14-37;Proverbs 10:29-30","0308":"Psalm 37:1-11;Numbers 10:1-11:23;Mark 14:1-21;Proverbs 10:31-32","0309":"Psalm 37:12-20;Numbers 11:24-13:33;Mark 14:22-52;Proverbs 11:1-3","0310":"Psalm 37:21-29;Numbers 14:1-15:16;Mark 14:53-72;Proverbs 11:4","0311":"Psalm 37:30-40;Numbers 15:17-16:40;Mark 15:1-47;Proverbs 11:5-6","0312":"Psalm 38:1-12;Numbers 16:41-18:32;Mark 16:1-20;Proverbs 11:7","0313":"Psalm 38:13-22;Numbers 19:1-20:29;Luke 1:1-25;Proverbs 11:8","0314":"Psalm 39:1-6;Numbers 21:1-22:20;Luke 1:26-56;Proverbs 11:9-11","0315":"Psalm 39:7-13;Numbers 22:21-23:30;Luke 1:57-80;Proverbs 11:12-13","0316":"Psalm 40:1-5;Numbers 24:1-25:18;Luke 2:1-35;Proverbs 11:14","0317":"Psalm 40:6-10;Numbers 26:1-51;Luke 2:36-52;Proverbs 11:15","0318":"Psalm 40:11-17;Numbers 26:52-28:15;Luke 3:1-22;Proverbs 11:16-17","0319":"Psalm 41:1-3;Numbers 28:16-29:40;Luke 3:23-38;Proverbs 11:18-19","0320":"Psalm 41:4-9;Numbers 30:1-31:54;Luke 4:1-30;Proverbs 11:20-21","0321":"Psalm 41:10-13;Numbers 32:1-33:39;Luke 4:31-5:11;Proverbs 11:22","0322":"Psalm 42:1-5;Numbers 33:40-35:34;Luke 5:12-28;Proverbs 11:23","0323":"Psalm 42:6-11;Numbers 36:1-36:13;Deuteronomy 1:1-1:46;Luke 5:29-6:11;Proverbs 11:24-26","0324":"Psalm 43:1-5;Deuteronomy 2:1-3:29;Luke 6:12-38;Proverbs 11:27","0325":"Psalm 44:1-3;Deuteronomy 4:1-49;Luke 6:39-7:10;Proverbs 11:28","0326":"Psalm 44:4-8;Deuteronomy 5:1-6:25;Luke 7:11-35;Proverbs 11:29-31","0327":"Psalm 44:9-16;Deuteronomy 7:1-8:20;Luke 7:36-8:3;Proverbs 12:1","0328":"Psalm 44:17-26;Deuteronomy 9:1-10:22;Luke 8:4-21;Proverbs 12:2-3","0329":"Psalm 45:1-9;Deuteronomy 11:1-12:32;Luke 8:22-39;Proverbs 12:4","0330":"Psalm 45:10-17;Deuteronomy 13:1-15:23;Luke 8:40-9:6;Proverbs 12:5-7","0331":"Psalm 46:1-7;Deuteronomy 16:1-17:20;Luke 9:7-27;Proverbs 12:8-9","0401":"Psalm 46:8-11;Deuteronomy 18:1-20:20;Luke 9:28-50;Proverbs 12:10","0402":"Psalm 47:1-4;Deuteronomy 21:1-22:30;Luke 9:51-10:12;Proverbs 12:11","0403":"Psalm 47:5-9;Deuteronomy 23:1-25:19;Luke 10:13-37;Proverbs 12:12-14","0404":"Psalm 48:1-8;Deuteronomy 26:1-27:26;Luke 10:38-11:13;Proverbs 12:15-17","0405":"Psalm 48:9-14;Deuteronomy 28:1-68;Luke 11:14-36;Proverbs 12:18","0406":"Psalm 49:1-13;Deuteronomy 29:1-30:20;Luke 11:37-12:7;Proverbs 12:19-20","0407":"Psalm 49:14-20;Deuteronomy 31:1-32:27;Luke 12:8-34;Proverbs 12:21-23","0408":"Psalm 50:1-6;Deuteronomy 32:28-52;Luke 12:35-59;Proverbs 12:24","0409":"Psalm 50:7-23;Deuteronomy 33:1-29;Luke 13:1-21;Proverbs 12:25","0410":"Psalm 51:1-12;Deuteronomy 34:1-34:12;Joshua 1:1-2:24;Luke 13:22-14:6;Proverbs 12:26","0411":"Psalm 51:13-19;Joshua 3:1-4:24;Luke 14:7-35;Proverbs 12:27-28","0412":"Psalm 52:1-9;Joshua 5:1-7:15;Luke 15:1-32;Proverbs 13:1","0413":"Psalm 53:1-6;Joshua 7:16-9:2;Luke 16:1-18;Proverbs 13:2-3","0414":"Psalm 54:1-7;Joshua 9:3-10:43;Luke 16:19-17:10;Proverbs 13:4","0415":"Psalm 55:1-8;Joshua 11:1-12:24;Luke 17:11-37;Proverbs 13:5-6","0416":"Psalm 55:9-15;Joshua 13:1-14:15;Luke 18:1-17;Proverbs 13:7-8","0417":"Psalm 55:16-23;Joshua 15:1-63;Luke 18:18-43;Proverbs 13:9-10","0418":"Psalm 56:1-8;Joshua 16:1-18:28;Luke 19:1-27;Proverbs 13:11","0419":"Psalm 56:9-13;Joshua 19:1-20:9;Luke 19:28-48;Proverbs 13:12-14","0420":"Psalm 57:1-6;Joshua 21:1-22:20;Luke 20:1-26;Proverbs 13:15-16","0421":"Psalm 57:7-11;Joshua 22:21-23:16;Luke 20:27-47;Proverbs 13:17-19","0422":"Psalm 58:1-11;Joshua 24:1-33;Luke 21:1-28;Proverbs 13:20-23","0423":"Psalm 59:1-5;Judges 1:1-2:9;Luke 21:29-22:13;Proverbs 13:24-25","0424":"Psalm 59:6-13;Judges 2:10-3:31;Luke 22:14-34;Proverbs 14:1-2","0425":"Psalm 59:14-17;Judges 4:1-5:31;Luke 22:35-53;Proverbs 14:3-4","0426":"Psalm 60:1-4;Judges 6:1-6:40;Luke 22:54-23:12;Proverbs 14:5-6","0427":"Psalm 60:5-12;Judges 7:1-8:17;Luke 23:13-43;Proverbs 14:7-8","0428":"Psalm 61:1-4;Judges 8:18-9:21;Luke 23:44-24:12;Proverbs 14:9-10","0429":"Psalm 61:5-8;Judges 9:22-10:18;Luke 24:13-53;Proverbs 14:11-12","0430":"Psalm 62:1-12;Judges 11:1-12:15;John 1:1-28;Proverbs 14:13-14","0501":"Psalm 63:1-11;Judges 13:1-14:20;John 1:29-51;Proverbs 14:15-16","0502":"Psalm 64:1-10;Judges 15:1-16:31;John 2:1-25;Proverbs 14:17-19","0503":"Psalm 65:1-8;Judges 17:1-18:31;John 3:1-21;Proverbs 14:20-21","0504":"Psalm 65:9-13;Judges 19:1-20:48;John 3:22-4:3;Proverbs 14:22-24","0505":"Psalm 66:1-4;Judges 21:1-21:25;Ruth 1:1-1:22;John 4:4-42;Proverbs 14:25","0506":"Psalm 66:5-15;Ruth 2:1-4:22;John 4:43-54;Proverbs 14:26-27","0507":"Psalm 66:16-20;1Samuel 1:1-2:21;John 5:1-23;Proverbs 14:28-29","0508":"Psalm 67:1-7;1Samuel 2:22-4:22;John 5:24-47;Proverbs 14:30-31","0509":"Psalm 68:1-6;1Samuel 5:1-7:17;John 6:1-21;Proverbs 14:32-33","0510":"Psalm 68:7-18;1Samuel 8:1-9:27;John 6:22-42;Proverbs 14:34-35","0511":"Psalm 68:19-27;1Samuel 10:1-11:15;John 6:43-71;Proverbs 15:1-3","0512":"Psalm 68:28-35;1Samuel 12:1-13:22;John 7:1-29;Proverbs 15:4","0513":"Psalm 69:1-4;1Samuel 13:23-14:52;John 7:30-52;Proverbs 15:5-7","0514":"Psalm 69:5-12;1Samuel 15:1-16:23;John 8:1-20;Proverbs 15:8-10","0515":"Psalm 69:13-18;1Samuel 17:1-18:4;John 8:21-30;Proverbs 15:11","0516":"Psalm 69:19-28;1Samuel 18:5-19:24;John 8:31-59;Proverbs 15:12-14","0517":"Psalm 69:29-36;1Samuel 20:1-21:15;John 9:1-41;Proverbs 15:15-17","0518":"Psalm 70:1-5;1Samuel 22:1-23:29;John 10:1-21;Proverbs 15:18-19","0519":"Psalm 71:1-8;1Samuel 24:1-25:44;John 10:22-42;Proverbs 15:20-21","0520":"Psalm 71:9-14;1Samuel 26:1-28:25;John 11:1-53;Proverbs 15:22-23","0521":"Psalm 71:15-18;1Samuel 29:1-31:13;John 11:54-12:19;Proverbs 15:24-26","0522":"Psalm 71:19-24;2Samuel 1:1-2:11;John 12:20-50;Proverbs 15:27-28","0523":"Psalm 72:1-7;2Samuel 2:12-3:39;John 13:1-30;Proverbs 15:29-30","0524":"Psalm 72:8-14;2Samuel 4:1-6:23;John 13:31-14:14;Proverbs 15:31-32","0525":"Psalm 72:15-20;2Samuel 7:1-8:18;John 14:15-31;Proverbs 15:33","0526":"Psalm 120:1-7;2Samuel 9:1-11:27;John 15:1-27;Proverbs 16:1-3","0527":"Psalm 121:1-8;2Samuel 12:1-31;John 16:1-33;Proverbs 16:4-5","0528":"Psalm 122:1-5;2Samuel 13:1-39;John 17:1-26;Proverbs 16:6-7","0529":"Psalm 122:6-9;2Samuel 14:1-15:22;John 18:1-24;Proverbs 16:8-9","0530":"Psalm 123:1-4;2Samuel 15:23-16:23;John 18:25-19:22;Proverbs 16:10-11","0531":"Psalm 124:1-5;2Samuel 17:1-29;John 19:23-42;Proverbs 16:12-13","0601":"Psalm 124:6-8;2Samuel 18:1-19:10;John 20:1-31;Proverbs 16:14-15","0602":"Psalm 125:1-5;2Samuel 19:11-20:13;John 21:1-25;Proverbs 16:16-17","0603":"Psalm 126:1-3;2Samuel 20:14-22:20;Acts 1:1-26;Proverbs 16:18","0604":"Psalm 126:4-6;2Samuel 22:21-23:23;Acts 2:1-47;Proverbs 16:19-20","0605":"Psalm 127:1-2;2Samuel 23:24-24:25;Acts 3:1-26;Proverbs 16:21-23","0606":"Psalm 127:3-5;1Kings 1:1-53;Acts 4:1-37;Proverbs 16:24","0607":"Psalm 128:1-6;1Kings 2:1-3:3;Acts 5:1-42;Proverbs 16:25","0608":"Psalm 129:1-8;1Kings 3:4-4:34;Acts 6:1-15;Proverbs 16:26-27","0609":"Psalm 130:1-4;1Kings 5:1-6:38;Acts 7:1-29;Proverbs 16:28-30","0610":"Psalm 130:5-8;1Kings 7:1-51;Acts 7:30-50;Proverbs 16:31-33","0611":"Psalm 131:1-3;1Kings 8:1-66;Acts 7:51-8:13;Proverbs 17:1","0612":"Psalm 132:1-5;1Kings 9:1-10:29;Acts 8:14-40;Proverbs 17:2-3","0613":"Psalm 132:6-12;1Kings 11:1-12:19;Acts 9:1-25;Proverbs 17:4-5","0614":"Psalm 132:13-18;1Kings 12:20-13:34;Acts 9:26-43;Proverbs 17:6","0615":"Psalm 133:1-3;1Kings 14:1-15:24;Acts 10:1-23;Proverbs 17:7-8","0616":"Psalm 134:1-3;1Kings 15:25-17:24;Acts 10:23-48;Proverbs 17:9-11","0617":"Psalm 135:1-7;1Kings 18:1-46;Acts 11:1-30;Proverbs 17:12-13","0618":"Psalm 135:8-14;1Kings 19:1-21;Acts 12:1-23;Proverbs 17:14-15","0619":"Psalm 135:15-21;1Kings 20:1-21:29;Acts 12:24-13:15;Proverbs 17:16","0620":"Psalm 136:1-9;1Kings 22:1-53;Acts 13:16-41;Proverbs 17:17-18","0621":"Psalm 136:10-22;2Kings 1:1-2:25;Acts 13:42-14:7;Proverbs 17:19-21","0622":"Psalm 136:23-26;2Kings 3:1-4:17;Acts 14:8-28;Proverbs 17:22","0623":"Psalm 137:1-8;2Kings 4:18-5:27;Acts 15:1-35;Proverbs 17:23","0624":"Psalm 138:1-8;2Kings 6:1-7:20;Acts 15:36-16:15;Proverbs 17:24-25","0625":"Psalm 139:1-12;2Kings 8:1-9:13;Acts 16:16-40;Proverbs 17:26","0626":"Psalm 139:13-24;2Kings 9:14-10:31;Acts 17:1-34;Proverbs 17:27-28","0627":"Psalm 140:1-8;2Kings 10:32-12:21;Acts 18:1-22;Proverbs 18:1","0628":"Psalm 140:9-13;2Kings 13:1-14:29;Acts 18:23-19:12;Proverbs 18:2-3","0629":"Psalm 141:1-10;2Kings 15:1-16:20;Acts 19:13-41;Proverbs 18:4-5","0630":"Psalm 142:1-7;2Kings 17:1-18:12;Acts 20:1-38;Proverbs 18:6-7","0701":"Psalm 143:1-6;2Kings 18:13-19:37;Acts 21:1-16;Proverbs 18:8","0702":"Psalm 143:7-12;2Kings 20:1-22:2;Acts 21:17-36;Proverbs 18:9-10","0703":"Psalm 144:1-8;2Kings 22:3-23:30;Acts 21:37-22:16;Proverbs 18:11-12","0704":"Psalm 144:9-15;2Kings 23:31-25:30;Acts 22:17-23:10;Proverbs 18:13","0705":"Psalm 145:1-7;1Chronicles 1:1-2:17;Acts 23:11-35;Proverbs 18:14-15","0706":"Psalm 145:8-13;1Chronicles 2:18-4:4;Acts 24:1-27;Proverbs 18:16-18","0707":"Psalm 145:14-21;1Chronicles 4:5-5:17;Acts 25:1-27;Proverbs 18:19","0708":"Psalm 146:1-10;1Chronicles 5:18-6:81;Acts 26:1-32;Proverbs 18:20-21","0709":"Psalm 147:1-11;1Chronicles 7:1-8:40;Acts 27:1-20;Proverbs 18:22","0710":"Psalm 147:12-20;1Chronicles 9:1-10:14;Acts 27:21-44;Proverbs 18:23-24","0711":"Psalm 148:1-14;1Chronicles 11:1-12:18;Acts 28:1-31;Proverbs 19:1-3","0712":"Psalm 149:1-9;1Chronicles 12:19-14:17;Romans 1:1-17;Proverbs 19:4-5","0713":"Psalm 150:1-6;1Chronicles 15:1-16:36;Romans 1:18-32;Proverbs 19:6-7","0714":"Psalm 73:1-14;1Chronicles 16:37-18:17;Romans 2:1-24;Proverbs 19:8-9","0715":"Psalm 73:15-28;1Chronicles 19:1-21:31;Romans 2:25-3:8;Proverbs 19:10-12","0716":"Psalm 74:1-11;1Chronicles 22:1-23:32;Romans 3:9-31;Proverbs 19:13-14","0717":"Psalm 74:12-23;1Chronicles 24:1-26:11;Romans 4:1-12;Proverbs 19:15-16","0718":"Psalm 75:1-10;1Chronicles 26:12-27:34;Romans 4:13-5:5;Proverbs 19:17","0719":"Psalm 76:1-9;1Chronicles 28:1-29:30;Romans 5:6-21;Proverbs 19:18-19","0720":"Psalm 76:10-12;2Chronicles 1:1-3:17;Romans 6:1-23;Proverbs 19:20-21","0721":"Psalm 77:1-15;2Chronicles 4:1-6:11;Romans 7:1-13;Proverbs 19:22-23","0722":"Psalm 77:16-20;2Chronicles 6:12-7:10;Romans 7:14-8:8;Proverbs 19:24-25","0723":"Psalm 78:1-16;2Chronicles 7:11-10:19;Romans 8:9-21;Proverbs 19:26","0724":"Psalm 78:17-31;2Chronicles 11:1-13:22;Romans 8:22-39;Proverbs 19:27-29","0725":"Psalm 78:32-55;2Chronicles 14:1-16:14;Romans 9:1-21;Proverbs 20:1","0726":"Psalm 78:56-64;2Chronicles 17:1-18:34;Romans 9:22-10:13;Proverbs 20:2-3","0727":"Psalm 78:65-72;2Chronicles 19:1-20:37;Romans 10:14-11:12;Proverbs 20:4-6","0728":"Psalm 79:1-8;2Chronicles 21:1-23:21;Romans 11:13-36;Proverbs 20:7","0729":"Psalm 79:9-13;2Chronicles 24:1-25:28;Romans 12:1-21;Proverbs 20:8-10","0730":"Psalm 80:1-7;2Chronicles 26:1-28:27;Romans 13:1-14;Proverbs 20:11","0731":"Psalm 80:8-19;2Chronicles 29:1-36;Romans 14:1-23;Proverbs 20:12","0801":"Psalm 81:1-7;2Chronicles 30:1-31:21;Romans 15:1-22;Proverbs 20:13-15","0802":"Psalm 81:8-16;2Chronicles 32:1-33:13;Romans 15:23-16:7;Proverbs 20:16-18","0803":"Psalm 82:1-8;2Chronicles 33:14-34:33;Romans 16:8-27;Proverbs 20:19","0804":"Psalm 83:1-8;2Chronicles 35:1-36:23;1Corinthians 1:1-17;Proverbs 20:20-21","0805":"Psalm 83:9-18;Ezra 1:1-2:70;1Corinthians 1:18-2:5;Proverbs 20:22-23","0806":"Psalm 84:1-4;Ezra 3:1-4:24;1Corinthians 2:6-3:4;Proverbs 20:24-25","0807":"Psalm 84:5-8;Ezra 5:1-6:22;1Corinthians 3:5-23;Proverbs 20:26-27","0808":"Psalm 84:9-12;Ezra 7:1-8:20;1Corinthians 4:1-21;Proverbs 20:28-30","0809":"Psalm 85:1-7;Ezra 8:21-9:15;1Corinthians 5:1-13;Proverbs 21:1-2","0810":"Psalm 85:8-13;Ezra 10:1-44;1Corinthians 6:1-20;Proverbs 21:3","0811":"Psalm 86:1-7;Nehemiah 1:1-3:14;1Corinthians 7:1-24;Proverbs 21:4","0812":"Psalm 86:8-17;Nehemiah 3:15-5:13;1Corinthians 7:25-40;Proverbs 21:5-7","0813":"Psalm 87:1-7;Nehemiah 5:14-7:60;1Corinthians 8:1-13;Proverbs 21:8-10","0814":"Psalm 88:1-7;Nehemiah 7:61-9:21;1Corinthians 9:1-18;Proverbs 21:11-12","0815":"Psalm 88:8-18;Nehemiah 9:22-10:39;1Corinthians 9:19-10:13;Proverbs 21:13","0816":"Psalm 89:1-13;Nehemiah 11:1-12:26;1Corinthians 10:14-11:2;Proverbs 21:14-16","0817":"Psalm 89:14-37;Nehemiah 12:27-13:31;1Corinthians 11:3-16;Proverbs 21:17-18","0818":"Psalm 89:38-45;Esth 1:1-3:15;1Corinthians 11:17-34;Proverbs 21:19-20","0819":"Psalm 89:46-52;Esth 4:1-7:10;1Corinthians 12:1-26;Proverbs 21:21-22","0820":"Psalm 90:1-10;Esth 8:1-10:3;1Corinthians 12:27-13:13;Proverbs 21:23-24","0821":"Psalm 90:11-17;Job 1:1-3:26;1Corinthians 14:1-17;Proverbs 21:25-26","0822":"Psalm 91:1-8;Job 4:1-7:21;1Corinthians 14:18-40;Proverbs 21:27","0823":"Psalm 91:9-16;Job 8:1-11:20;1Corinthians 15:1-28;Proverbs 21:28-29","0824":"Psalm 92:1-8;Job 12:1-15:35;1Corinthians 15:29-58;Proverbs 21:30-31","0825":"Psalm 92:9-15;Job 16:1-19:29;1Corinthians 16:1-24;Proverbs 22:1","0826":"Psalm 93:1-5;Job 20:1-22:30;2Corinthians 1:1-11;Proverbs 22:2-4","0827":"Psalm 94:1-11;Job 23:1-27:23;2Corinthians 1:12-2:11;Proverbs 22:5-6","0828":"Psalm 94:12-23;Job 28:1-30:31;2Corinthians 2:12-17;Proverbs 22:7","0829":"Psalm 95:1-11;Job 31:1-33:33;2Corinthians 3:1-18;Proverbs 22:8-9","0830":"Psalm 96:1-6;Job 34:1-36:33;2Corinthians 4:1-12;Proverbs 22:10-12","0831":"Psalm 96:7-13;Job 37:1-39:30;2Corinthians 4:13-5:10;Proverbs 22:13","0901":"Psalm 97:1-6;Job 40:1-42:27;2Corinthians 5:11-21;Proverbs 22:14","0902":"Psalm 97:7-12;Ecclesiastes 1:1-3:22;2Corinthians 6:1-13;Proverbs 22:15","0903":"Psalm 98:1-9;Ecclesiastes 4:1-6:12;2Corinthians 6:14-7:7;Proverbs 22:16","0904":"Psalm 99:1-9;Ecclesiastes 7:1-9:18;2Corinthians 7:8-16;Proverbs 22:17-19","0905":"Psalm 100:1-5;Ecclesiastes 10:1-12:14;2Corinthians 8:1-15;Proverbs 22:20-21","0906":"Psalm 101:1-8;Song 1:1-4:16;2Corinthians 8:16-24;Proverbs 22:22-23","0907":"Psalm 102:1-11;Song 5:1-8:14;2Corinthians 9:1-15;Proverbs 22:24-25","0908":"Psalm 102:12-17;Isaiah 1:1-2:22;2Corinthians 10:1-18;Proverbs 22:26-27","0909":"Psalm 102:18-28;Isaiah 3:1-5:30;2Corinthians 11:1-15;Proverbs 22:28-29","0910":"Psalm 103:1-5;Isaiah 6:1-7:25;2Corinthians 11:16-33;Proverbs 23:1-3","0911":"Psalm 103:6-19;Isaiah 8:1-9:21;2Corinthians 12:1-10;Proverbs 23:4-5","0912":"Psalm 103:20-22;Isaiah 10:1-11:16;2Corinthians 12:11-21;Proverbs 23:6-8","0913":"Psalm 104:1-9;Isaiah 12:1-14:32;2Corinthians 13:1-14;Proverbs 23:9-11","0914":"Psalm 104:10-18;Isaiah 15:1-18:7;Galatians 1:1-24;Proverbs 23:12","0915":"Psalm 104:19-30;Isaiah 19:1-21:17;Galatians 2:1-16;Proverbs 23:13-14","0916":"Psalm 104:31-35;Isaiah 22:1-24:23;Galatians 2:27-3:9;Proverbs 23:15-16","0917":"Psalm 105:1-7;Isaiah 25:1-28:13;Galatians 3:10-22;Proverbs 23:17-18","0918":"Psalm 105:8-15;Isaiah 28:14-30:11;Galatians 3:23-4:31;Proverbs 23:19-21","0919":"Psalm 105:16-22;Isaiah 30:12-33:12;Galatians 5:1-12;Proverbs 23:22","0920":"Psalm 105:23-36;Isaiah 33:13-36:22;Galatians 5:13-26;Proverbs 23:23","0921":"Psalm 105:37-45;Isaiah 37:1-38:22;Galatians 6:1-18;Proverbs 23:24","0922":"Psalm 106:1-5;Isaiah 39:1-41:16;Ephesians 1:1-23;Proverbs 23:25-28","0923":"Psalm 106:6-12;Isaiah 41:17-43:13;Ephesians 2:1-22;Proverbs 23:29-35","0924":"Psalm 106:13-23;Isaiah 43:14-45:10;Ephesians 3:1-21;Proverbs 24:1-2","0925":"Psalm 106:24-31;Isaiah 45:11-48:11;Ephesians 4:1-16;Proverbs 24:3-4","0926":"Psalm 106:32-39;Isaiah 48:12-50:11;Ephesians 4:17-32;Proverbs 24:5-6","0927":"Psalm 106:40-48;Isaiah 51:1-53:12;Ephesians 5:1-33;Proverbs 24:7","0928":"Psalm 107:1-9;Isaiah 54:1-57:13;Ephesians 6:1-24;Proverbs 24:8","0929":"Psalm 107:10-16;Isaiah 57:14-59:21;Philippians 1:1-26;Proverbs 24:9-10","0930":"Psalm 107:17-22;Isaiah 60:1-62:5;Philippians 1:27-2:18;Proverbs 24:11-12","1001":"Psalm 107:23-32;Isaiah 62:6-65:25;Philippians 2:19-3:4;Proverbs 24:13-14","1002":"Psalm 107:33-43;Isaiah 66:1-24;Philippians 3:4-21;Proverbs 24:15-16","1003":"Psalm 108:1-5;Jeremiah 1:1-2:30;Philippians 4:1-23;Proverbs 24:17-20","1004":"Psalm 108:6-13;Jeremiah 2:31-4:18;Colossians 1:1-20;Proverbs 24:21-22","1005":"Psalm 109:1-15;Jeremiah 4:19-6:16;Colossians 1:21-2:7;Proverbs 24:23-25","1006":"Psalm 109:16-31;Jeremiah 6:15-8:7;Colossians 2:8-23;Proverbs 24:26","1007":"Psalm 110:1-7;Jeremiah 8:8-9:26;Colossians 3:1-17;Proverbs 24:27","1008":"Psalm 111:1-10;Jeremiah 10:1-11:23;Colossians 3:18-4:18;Proverbs 24:28-29","1009":"Psalm 112:1-10;Jeremiah 12:1-14:10;1Thessalonians 1:1-2:9;Proverbs 24:30-34","1010":"Psalm 113:1-9;Jeremiah 14:11-16:15;1Thessalonians 2:10-3:13;Proverbs 25:1-5","1011":"Psalm 114:1-8;Jeremiah 16:16-18:23;1Thessalonians 4:1-5:3;Proverbs 25:6-7","1012":"Psalm 115:1-8;Jeremiah 19:1-21:14;1Thessalonians 5:4-28;Proverbs 25:8-10","1013":"Psalm 115:9-13;Jeremiah 22:1-23:20;2Thessalonians 1:1-12;Proverbs 25:11-14","1014":"Psalm 115:14-18;Jeremiah 23:21-25:38;2Thessalonians 2:1-17;Proverbs 25:15","1015":"Psalm 116:1-6;Jeremiah 26:1-27:22;2Thessalonians 3:1-18;Proverbs 25:16","1016":"Psalm 116:7-14;Jeremiah 28:1-29:32;1Timothy 1:1-20;Proverbs 25:17","1017":"Psalm 116:15-19;Jeremiah 30:1-31:26;1Timothy 2:1-15;Proverbs 25:18-19","1018":"Psalm 117:1-2;Jeremiah 31:27-32:44;1Timothy 3:1-16;Proverbs 25:20-22","1019":"Psalm 118:1-4;Jeremiah 33:1-34:22;1Timothy 4:1-16;Proverbs 25:23-24","1020":"Psalm 118:5-21;Jeremiah 35:1-36:32;1Timothy 5:1-25;Proverbs 25:25-27","1021":"Psalm 118:22-29;Jeremiah 37:1-38:28;1Timothy 6:1-21;Proverbs 25:28","1022":"Psalm 119:1-8;Jeremiah 39:1-41:18;2Timothy 1:1-18;Proverbs 26:1-2","1023":"Psalm 119:9-16;Jeremiah 42:1-44:23;2Timothy 2:1-21;Proverbs 26:3-5","1024":"Psalm 119:17-24;Jeremiah 44:24-47:7;2Timothy 2:22-3:17;Proverbs 26:6-8","1025":"Psalm 119:25-32;Jeremiah 48:1-49:22;2Timothy 4:1-22;Proverbs 26:9-12","1026":"Psalm 119:33-40;Jeremiah 49:23-50:46;Titus 1:1-16;Proverbs 26:13-16","1027":"Psalm 119:41-48;Jeremiah 51:1-53;Titus 2:1-15;Proverbs 26:17","1028":"Psalm 119:49-56;Jeremiah 51:54-52:34;Titus 3:1-15;Proverbs 26:18-19","1029":"Psalm 119:57-64;Lamentations 1:1-2:19;Philemon 1-25;Proverbs 26:20","1030":"Psalm 119:65-72;Lamentations 2:20-3:66;Hebrews 1:1-14;Proverbs 26:21-22","1031":"Psalm 119:73-80;Lamentations 4:1-5:22;Hebrews 2:1-18;Proverbs 26:23","1101":"Psalm 119:81-88;Ezekiel 1:1-3:15;Hebrews 3:1-19;Proverbs 26:24-26","1102":"Psalm 119:89-96;Ezekiel 3:16-6:14;Hebrews 4:1-16;Proverbs 26:27","1103":"Psalm 119:97-104;Ezekiel 7:1-9:11;Hebrews 5:1-14;Proverbs 26:28","1104":"Psalm 119:105-112;Ezekiel 10:1-11:25;Hebrews 6:1-20;Proverbs 27:1-2","1105":"Psalm 119:113-120;Ezekiel 12:1-14:11;Hebrews 7:1-17;Proverbs 27:3","1106":"Psalm 119:121-128;Ezekiel 14:12-16:42;Hebrews 7:18-28;Proverbs 27:4-6","1107":"Psalm 119:129-136;Ezekiel 16:43-17:24;Hebrews 8:1-13;Proverbs 27:7-9","1108":"Psalm 119:137-144;Ezekiel 18:1-19:14;Hebrews 9:1-10;Proverbs 27:10","1109":"Psalm 119:145-152;Ezekiel 20:1-49;Hebrews 9:11-28;Proverbs 27:11","1110":"Psalm 119:153-160;Ezekiel 21:1-22:31;Hebrews 10:1-17;Proverbs 27:12","1111":"Psalm 119:161-168;Ezekiel 23:1-49;Hebrews 10:18-39;Proverbs 27:13","1112":"Psalm 119:169-176;Ezekiel 24:1-26:21;Hebrews 11:1-16;Proverbs 27:14","1113":"Psalm 120:1-7;Ezekiel 27:1-28:26;Hebrews 11:17-31;Proverbs 27:15-16","1114":"Psalm 121:1-8;Ezekiel 29:1-30:26;Hebrews 11:32-12:13;Proverbs 27:17","1115":"Psalm 122:1-9;Ezekiel 31:1-32:32;Hebrews 12:14-29;Proverbs 27:18-20","1116":"Psalm 123:1-4;Ezekiel 33:1-34:31;Hebrews 13:1-25;Proverbs 27:21-22","1117":"Psalm 124:1-5;Ezekiel 35:1-36:38;James 1:1-18;Proverbs 27:23-27","1118":"Psalm 124:6-8;Ezekiel 37:1-38:23;James 1:19-2:17;Proverbs 28:1","1119":"Psalm 125:1-5;Ezekiel 39:1-40:27;James 2:18-3:18;Proverbs 28:2","1120":"Psalm 126:1-3;Ezekiel 40:28-41:26;James 4:1-17;Proverbs 28:3-5","1121":"Psalm 126:4-6;Ezekiel 42:1-43:27;James 5:1-20;Proverbs 28:6-7","1122":"Psalm 127:1-5;Ezekiel 44:1-45:12;1Peter 1:1-12;Proverbs 28:8-10","1123":"Psalm 128:1-6;Ezekiel 45:13-46:24;1Peter 1:13-2:10;Proverbs 28:11","1124":"Psalm 129:1-8;Ezekiel 47:1-48:35;1Peter 2:11-3:7;Proverbs 28:12-13","1125":"Psalm 130:1-4;Daniel 1:1-2:23;1Peter 3:8-4:6;Proverbs 28:14","1126":"Psalm 130:5-8;Daniel 2:24-3:30;1Peter 4:7-5:14;Proverbs 28:15-16","1127":"Psalm 131:1-3;Daniel 4:1-37;2Peter 1:1-21;Proverbs 28:17-18","1128":"Psalm 132:1-5;Daniel 5:1-31;2Peter 2:1-22;Proverbs 28:19-20","1129":"Psalm 132:6-12;Daniel 6:1-28;2Peter 3:1-18;Proverbs 28:21-22","1130":"Psalm 132:13-18;Daniel 7:1-28;1John 1:1-10;Proverbs 28:23-24","1201":"Psalm 133:1-3;Daniel 8:1-27;1John 2:1-17;Proverbs 28:25-26","1202":"Psalm 134:1-3;Daniel 9:1-11:1;1John 2:18-3:6;Proverbs 28:27-28","1203":"Psalm 135:1-7;Daniel 11:2-35;1John 3:7-24;Proverbs 29:1","1204":"Psalm 135:8-14;Daniel 11:36-12:13;1John 4:1-21;Proverbs 29:2-4","1205":"Psalm 135:15-21;Hosea 1:1-3:5;1John 5:1-21;Proverbs 29:5-8","1206":"Psalm 136:1-9;Hosea 4:1-5:15;2John 1-13;Proverbs 29:9-11","1207":"Psalm 136:10-26;Hosea 6:1-9:17;3John 1-15;Proverbs 29:12-14","1208":"Psalm 137:1-9;Hosea 10:1-14:9;Jude 1-25;Proverbs 29:15-17","1209":"Psalm 138:1-8;Joel 1:1-3:21;Revelation 1:1-20;Proverbs 29:18","1210":"Psalm 139:1-6;Amos 1:1-3:15;Revelation 2:1-17;Proverbs 29:19-20","1211":"Psalm 139:7-12;Amos 4:1-6:14;Revelation 2:18-3:6;Proverbs 29:21-22","1212":"Psalm 139:13-18;Amos 7:1-9:15;Revelation 3:7-22;Proverbs 29:23","1213":"Psalm 139:19-24;Obadiah 1-21;Revelation 4:1-11;Proverbs 29:24-25","1214":"Psalm 140:1-8;Jonah 1:1-4:11;Revelation 5:1-14;Proverbs 29:26-27","1215":"Psalm 140:9-13;Micah 1:1-4:13;Revelation 6:1-17;Proverbs 30:1-4","1216":"Psalm 141:1-10;Micah 5:1-7:20;Revelation 7:1-17;Proverbs 30:5-6","1217":"Psalm 142:1-7;Nahum 1:1-3:19;Revelation 8:1-13;Proverbs 30:7-9","1218":"Psalm 143:1-6;Habakkuk 1:1-3:19;Revelation 9:1-21;Proverbs 30:10","1219":"Psalm 143:7-12;Zephaniah 1:1-3:20;Revelation 10:1-11;Proverbs 30:11-14","1220":"Psalm 144:1-8;Haggai 1:1-2:23;Revelation 11:1-19;Proverbs 30:15-16","1221":"Psalm 144:9-15;Zechariah 1:1-21;Revelation 12:1-13:1;Proverbs 30:17","1222":"Psalm 145:1-7;Zechariah 2:1-3:10;Revelation 13:2-18;Proverbs 30:18-20","1223":"Psalm 145:8-13;Zechariah 4:1-5:11;Revelation 14:1-20;Proverbs 30:21-23","1224":"Psalm 145:14-21;Zechariah 6:1-7:14;Revelation 15:1-8;Proverbs 30:24-28","1225":"Psalm 146:1-10;Zechariah 8:1-23;Revelation 16:1-21;Proverbs 30:29-31","1226":"Psalm 147:1-11;Zechariah 9:1-17;Revelation 17:1-18;Proverbs 30:32","1227":"Psalm 147:12-20;Zechariah 10:1-11:17;Revelation 18:1-24;Proverbs 30:33","1228":"Psalm 148:1-6;Zechariah 12:1-13:9;Revelation 19:1-21;Proverbs 31:1-7","1229":"Psalm 148:7-14;Zechariah 14:1-21;Revelation 20:1-15;Proverbs 31:8-9","1230":"Psalm 149:1-9;Malachi 1:1-2:17;Revelation 21:1-27;Proverbs 31:10-24","1231":"Psalm 150:1-6;Malachi 3:1-4:6;Revelation 22:1-21;Proverbs 31:25-31"}';
	  }


}

