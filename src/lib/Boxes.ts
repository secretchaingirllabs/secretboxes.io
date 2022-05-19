export interface BoxPostFrontmatter {
    title: string,
    description: string,
    box: BoxMetadata,
    index: number,
}

export interface BoxMetadata {
    createdAt: Date,
    title: string,
    description: string,
    prelude: string,
    difficulty: string,
    image: string,
    gitpod: string,
    lottie: string,
}