export interface BoxPostFrontmatter {
    title: string,
    description: string,
    box: BoxMetadata,
    index: number,
    image: string,
    lotti?: string,
}

export interface BoxMetadata {
    title: string,
    description: string,
    prelude: string,
    difficultly: string,
    image: string,
}