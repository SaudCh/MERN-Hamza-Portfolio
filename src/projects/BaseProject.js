import { nanoid } from 'nanoid';

class BaseProject {
  constructor({
    title,
    name,
    description,
    mainImage,
    video,
    images,
    features, // {title, description}
  }) {
    if (!title) throw new Error('title is required');
    if (!name) throw new Error('name is required');
    if (!description) throw new Error('description is required');
    if (!mainImage) throw new Error('mainImage is required');
    if (!video && images.length === 0)
      throw new Error('video or images is required');
    if (features.length === 0) throw new Error('features are required');
    if (features.length < 3)
      throw new Error('features must have at least 3 features');

    this.id = nanoid();
    this.title = title;
    this.name = name;
    this.description = description;
    this.mainImage = mainImage;
    this.video = video;
    this.images = images;
    this.features = features;
  }
}

export default BaseProject;
