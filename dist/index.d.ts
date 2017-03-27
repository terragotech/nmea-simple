import { APBPacket } from "./codecs/APB";
import { BWCPacket } from "./codecs/BWC";
import { DBTPacket } from "./codecs/DBT";
import { GGAPacket } from "./codecs/GGA";
import { GLLPacket } from "./codecs/GLL";
import { GSAPacket } from "./codecs/GSA";
import { GSVPacket } from "./codecs/GSV";
import { HDGPacket } from "./codecs/HDG";
import { HDMPacket } from "./codecs/HDM";
import { HDTPacket } from "./codecs/HDT";
import { MTKPacket } from "./codecs/MTK";
import { MWVPacket } from "./codecs/MWV";
import { RDIDPacket } from "./codecs/RDID";
import { RMCPacket } from "./codecs/RMC";
import { VHWPacket } from "./codecs/VHW";
import { VTGPacket } from "./codecs/VTG";
import { GSTPacket } from "./codecs/GST";
export declare type Packet = APBPacket | BWCPacket | DBTPacket | GGAPacket | GLLPacket | GSAPacket | GSVPacket | HDGPacket | HDMPacket | HDTPacket | MTKPacket | MWVPacket | RDIDPacket | RMCPacket | VHWPacket | VTGPacket | GSTPacket;
export { APBPacket, BWCPacket, DBTPacket, GGAPacket, GLLPacket, GSAPacket, GSVPacket, HDGPacket, HDMPacket, HDTPacket, MTKPacket, MWVPacket, RDIDPacket, RMCPacket, VHWPacket, VTGPacket, GSTPacket };
export declare function parseNmeaSentence(sentence: string): Packet;
export declare function encodeNmeaPacket(packet: Packet, talker?: string): string;
