type NodeEnv = 'development' | 'production';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      NODE_ENV?: NodeEnv;
    }
  }
}

export {};
