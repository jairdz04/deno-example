export default interface IBook {
  readonly _id: {
    $oid: string;
  };
  isbn: string;
  author: string;
  title: string;
}

export const format = (item: IBook) => {
  const { _id: { $oid }, isbn, author, title } = item;
  return { id: $oid, isbn, author, title };
};

export const mapper = (items: Array<IBook>) => {
  return items.map(format);
};
