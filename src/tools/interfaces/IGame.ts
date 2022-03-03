import {IDescription} from './IDescription';
import {IRequirements} from './IRequirements';

export interface IGame {
	id: string;
	image: string;
	video: string;
	title: string;
	key: string;
	description: string;
	fullDescription: IDescription[];
	genres: string[];
	price?: number;
	discount?: number;
	isNovice?: boolean;
	isLeader?: boolean;
	isCame?: boolean;
	requirements?: IRequirements[];
	languages: string[];
	date: string;
	author: string;
	publisher: string;
	isInCart?: boolean;
	isBuyed?: boolean;
}