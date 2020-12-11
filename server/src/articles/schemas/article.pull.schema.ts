import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type ArticlePullDocument = ArticlePull & Document;

@Schema()
export class ArticlePull {
  @Prop({ type: mongoose.Schema.Types.Mixed })
  hit: {};
  @Prop()
  deleted: boolean;
  @Prop()
  externalId: string;

}

export const ArticlePullSchema = SchemaFactory.createForClass(ArticlePull);