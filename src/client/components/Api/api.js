export const parseNewsData = (data) => {
  let newData = data.map((item) => {
    return {
      id: item.objectID,
      title: item.title,
      comments: item.num_comments,
      votes: item.points,
    };
  });
  return newData;
};
