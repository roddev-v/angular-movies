export class Torrent {
  url: string;
  hash: string;
  quality: string;
  type: string;
  seeds: number;
  peers: number;
  size: string;
  'size_bytes': any;
  'date_uploaded': string;
  'date_uploaded_unix': number;
}
