<script setup>
const komisaris = [
    {
        "nama_kantor": "Widodo",
        "jabatan": "Dewan Komisaris",
        "telepon": ["0231-248400", "0231-248600", "0231-248222"],
        "fax": "0231-204520",
        "avatar": "widodo.jpg",
        "location": "https://maps.app.goo.gl/4J3d4d7T23jEH7sz8",
    },
    
    {
        "nama_kantor": "Soenaryo Halim",
        "jabatan": "Dewan Komisaris",
        "alamat": "Jl. Raya Bulak No. 13-14, Jatibarang, Kab. Indramayu",
        "telepon": ["0234-355583", "0234-355585"],
        "fax": "0234-351210",
        "avatar": "soenaryo.jpg",
        "location": "https://maps.app.goo.gl/Up5E9PT6iPgCgCPc6",
    },]

    const direksi = [{
        "nama_kantor": "Robby Santoso",
        "jabatan": "Direksi",
        "alamat": "Jl. Ir. H Juanda No. 22, Plered",
        "telepon": ["0231-321666"],
        "avatar": "robby.jpg",
        "fax": null,

    },
    {
        "nama_kantor": "Gunadi",
        "jabatan": "Direksi",
        "alamat": "Komplek Ruko Jatiwangi Square Blok A No. 26, Kabupaten Majalengka",
        "telepon": ["0233-360100", "081222549115"],
        "fax": null,
        "avatar": "gunadi.jpg",
        "location": "https://raw.githubusercontent.com/ahapsin/web_bprcf/refs/heads/main/public/potrait/4.jpg?token=GHSAT0AAAAAAC3JPXICI2ZKESF57X7MR34KZ2SN2DQ",
    },
    {
        "nama_kantor": "Feby Fernady Masura",
        "jabatan": "Direksi",
        "alamat": "Jl. Syeh Maulana Akbar No. 18, Citamba, Kabupaten Kuningan",
        "telepon": ["0232-8951005", "0232-6001041"],
        "fax": null,
        "avatar": "feby.jpg",
        "location": "https://maps.app.goo.gl/C97Ch75v8VBY4q2s7",
    }
]
</script>

<template>
    <div class="animate-duration-1000 animate-ease-in-out dark:bg-primary-600">
        <div class="p-4 text-white px-10 bg-surface-50 dark:bg-primary-600"></div>
        <div class="flex justify-center pt-10 text-orange-500 font-semibold  text-2xl">
            Dewan Komisaris & Direksi
        </div>
        <div class="flex w-full text-muted-color justify-center">PT. BPR Cahaya Fajar</div>
        <div class="md:p-20">
            <div class="flex md:flex-row flex-col gap-4 justify-center">
                <div class="bg-surface-50 w-full md:w-1/3 dark:bg-primary-700 p-4 rounded-xl animate-duration-1000 animate-ease-in-out" v-for="komisaris in komisaris"
                    v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-slideout' }">
                    <div class="flex">
                        <Avatar :image="komisaris.avatar" class="mr-2" size="xlarge" shape="circle" />
                        <div>
                            <div class="flex justify-between text-xl font-semibold ">
                                {{ komisaris.nama_kantor }}
                            </div>
                            <div class="text-muted-color">{{ komisaris.jabatan }}</div>
                            <div class="text-muted-color"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-3 pt-4  gap-4 ">
                <div class="bg-surface-50 dark:bg-primary-700 p-4 rounded-xl animate-duration-1000 animate-ease-in-out" v-for="direksi in direksi"
                    v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-slideout' }">
                    <div class="flex">
                        <Avatar :image="direksi.avatar" class="mr-2" size="xlarge" shape="circle" />
                        <div>
                            <div class="flex justify-between text-xl font-semibold ">
                                {{ direksi.nama_kantor }}
                            </div>
                            <div class="text-muted-color">{{ direksi.jabatan }}</div>
                            <div class="text-muted-color"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
