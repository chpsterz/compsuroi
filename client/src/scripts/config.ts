export const Config = {
    regions: {
        dev: {
            name: "Local Server",
            mainAddress: "http://127.0.0.1:8000",
            gameAddress: "ws://127.0.0.1:800<ID>"
        },
        clanwar: {
            name: "4v4",
            mainAddress: "http://82.165.212.40",
            gameAddress: "ws://82.165.212.40:800<ID>"
        },
    },
    defaultRegion: "clanwar",
    mode: "normal"
} satisfies ConfigType as ConfigType;

export interface ConfigType {
    readonly regions: Record<string, Region>
    readonly defaultRegion: string
    readonly mode: string
}

export interface Region {
    /**
     * The human-readable name of the region, displayed in the server selector.
     */
    readonly name: string

    /**
     * The address of the region's main server.
     */
    readonly mainAddress: string

    /**
     * Pattern used to determine the address of the region's game servers.
     * The string <ID> is replaced by the gameID given by the /getGame API, plus one.
     * For example, if gameID is 0, and gameAddress is "ws://127.0.0.1:800<ID>", the resulting address will be ws://127.0.0.1:8001.
     */
    readonly gameAddress: string
}
