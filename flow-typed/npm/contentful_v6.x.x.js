declare module 'contentful' {

    declare class ContentfulClient {
        getEntries(params: any): Promise<any>
    }
    declare function createClient(
        options?: any
    ): ContentfulClient;

    declare module.exports: {

        createClient: typeof createClient
    };
}
