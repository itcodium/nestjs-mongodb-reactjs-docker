import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop({ type: mongoose.Schema.Types.Mixed })
  hit: {};
  @Prop()
  deleted: boolean;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);