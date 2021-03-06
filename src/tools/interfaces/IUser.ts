import {ImgHTMLAttributes} from 'react';
import {IGame} from './IGame';

export interface IUser {
	id: string;
	name: string;
	email: string;
	avatar?: string;
	pass: string;
	games: IGame[];
	cart: IGame[];
}