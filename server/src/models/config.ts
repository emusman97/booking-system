import { SchemaOptions } from 'mongoose';

export const baseSchemaOptions = <D>(): SchemaOptions<D> => ({
  timestamps: true,
  toJSON: {
    transform(_, ret) {
      ret.id = ret._id.toString();

      delete ret._id;
      delete ret.__v;

      return ret;
    },
  },
});
