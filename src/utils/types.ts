export interface Chat {
	identity: string;
	message: string;
}

export enum StorageKey {
	UserName = '@Storage:UserName',
	Chat = '@Storage:Chat',
}
