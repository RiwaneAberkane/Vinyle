## project Vinyle

TODO:
- [x] Installer nodemon
- [x] Installer express
- [x] Installer mongoose
- [x] Installer multer

    - Models
        - [ ] Model song
        ```js
        let Schema = new Schema({
            name: string,
            duration: string,
            image: string,
            artist: Schema.Types.objectId, ref: "artist",
            album: Schema.Types.objectId, ref: "album",
            genres: [string]
        })
        ```
        - [ ] Model artist
        ```js
        let Schema = new Schema({
            name: string,
            albums: [{Schema.Types.objectId, ref: "album",}],
            image: string,
            bio: string,
            single: [
                {
                    Schema.Types.objectId, ref: "song"
                }
            ]
        })
        ```

        - [ ] Model album
        ```js
        let Schema = new Schema({
            name: string,
            artist: {Schema.Types.objectId, ref: "artist"},
            album_type: string,
            total_tracks: number,
            image: string,
            genres: [string]
        })
        ```

        - [ ] Model playList
        ```js
        let Schema = new Schema({
            name: string,
            description: string,
            image: string,
            owner: {Schema.Types.objectId, ref: "membre"},
            followers: number,
            genres: [string],
            total_tracks: number
        })
        ```
    -CRUD
    - [ ] Suvire une playList
        - [ ] ajouter music
        - [ ] modifier music
        - [ ] supprimer music

        Attention!  une song appartient a un artist
        Attention!  un album appartient a un artist
        Attention!  une playList contient des songs


        On va avoir trois types de users:
        - un artist
        - um membre
        - 







