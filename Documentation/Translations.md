[Translations.Script.txt](https://github.com/domino54/title-packs/blob/master/Scripts/Libs/domino54/Translations.Script.txt)
-------------------------

This library allows you to display messages on players screens in their native languages. Extends Message library functions and can be insert inside a manialink in game modes. This library can't work without [SentenceBank](https://github.com/domino54/title-packs/blob/master/Scripts/Libs/domino54/SentenceBank.Script.txt) library on your disk.

### Functions

Note: Parameters marked with ***italic font*** can be ignored.

##### GetScriptVersion
* Returns `Text` containing actual script version (`"YYYY-MM-DD"`).

##### GetScriptName
* Returns `Text` containing actual script name (`"Translations.Script.txt"`).

##### GetTranslation
* Returns `Text` containing raw message in specified player's language.
* Parameters:
	* `CPlayer _Player`: the player to check his language.
	* `Text _Message`: the message to be translated. If translation is not found script returns this value.

##### GetComposedTranslation
* Returns `Text` containing message with attached prefix and composes in specified player's language.
* Parameters:
	* `CPlayer _Player`: the player to check his language.
	* `Text[] _Com`: array of text containing message and values to compose. First key is base message to translate, next are values to compose.
	* *`Text _Prefix`*: text to connect before translation.
* **Note:** Never use `^` to connect translated output text with other sentences. It displays wrong message then.

##### SendChat
* Displays translated message prefixed with arrow in chat.
* Parameters:
	* *`CPlayer _Player`*: the player to check his language. If ignored message is displayed to all players on the server.
	* `Text _Message`: the message to be translated. If translation is not found script sends this value in chat.

##### SendChat (with compose)
* Displays translated message with attached composes and prefixed with arrow in chat.
* Parameters:
	* *`CPlayer _Player`*: the player to check his language. If ignored message is displayed to all players on the server.
	* `Text[] _Message`: array of text containing message and values to compose. First key is base message to translate, next are values to compose. If translation is not found script sends this composed array in chat.


##### SendNotice (ShootMania only)
* Displays translated message in notices feed.
* Parameters:
	* *`CPlayer _Player`*: the player to check his language. If ignored notice is displayed to all players on the server.
	* `Text _Message`: the message to be translated. If translation is not found script displays this message in notices feed.
	* `Boolean _NoticeSound`: play default notice sound or keep silent.

##### SendNotice (with compose, ShootMania only)
* Displays translated message with attached composes in notices feed.
* Parameters:
	* *`CPlayer _Player`*: the player to check his language. If ignored notice is displayed to all players on the server.
	* `Text[] _Message`: array of text containing message and values to compose. First key is base message to translate, next are values to compose. If translation is not found script displays this message in notices feed.
	* `Boolean _NoticeSound`: play default notice sound or keep silent.

##### InsertToManialink
* Returns `Text` to be insert into manialink script code, containing basic functions that allow phrase translations.
* Parameters:
	* `Text[] _Messages`: list of messages to be insert. Inserts message only if it exists in sentence bank.
* Example: `{{{Translations::InsertToManialink(["Message 1", "Message 2"])}}}`
* **Note:** must be insert before manialink main() function.

### Functions in manialink insertion

##### TranslationsLib_Get
* Returns `Text` containing raw message in local user language.
* Parameters:
	* `Text _Message`: the message to be translated. If translation is not found script returns this value.

##### TranslationsLib_GetComposed
* Returns `Text` containing message with attached prefix and composes in local user language.
* Parameters:
	* `Text[] _Com`: array of text containing message and values to compose. First key is base message to translate, next are values to compose.
	* *`Text _Prefix`*: text to connect before translation.
* **Note:** Never use `^` to connect translated output text with other sentences. It displays wrong message then.

### Message library extensions

##### SendBigMessage
* Extending Message library, displays big message on player's UI.
* Parameters:
	* *`CPlayer _Player`*: the player to check his language. If ignored message is displayed to all players on the server.
	* `Text _Message`: the message to be translated. If translation is not found script displays this message.
	* `Integer _Duration`: duration of the message in miliseconds.
	* `Integer _Priority`: priority of the message.
	* *`CUIConfig::EUISound _Sound`*: sound of the message. If ignored message is silent.
	* *`Integer _SoundVariant`*: variant of the message sound. Ignore this, if you ignored `_Sound`.

##### SendBigMessage (with composes)
* Extending Message library, displays big message with attached composes on player's UI.
* Parameters:
	* *`CPlayer _Player`*: the player to check his language. If ignored message is displayed to all players on the server.
	* `Text[] _Message`: array of text containing message and values to compose. First key is base message to translate, next are values to compose. If translation is not found script displays this message.
	* `Integer _Duration`: duration of the message in miliseconds.
	* `Integer _Priority`: priority of the message.
	* *`CUIConfig::EUISound _Sound`*: sound of the message. If ignored message is silent.
	* *`Integer _SoundVariant`*: variant of the message sound. Ignore this, if you ignored `_Sound`.

##### SendStatusMessage
* Extending Message library, displays status message on player's UI.
* Parameters:
	* *`CPlayer _Player`*: the player to check his language. If ignored message is displayed to all players on the server.
	* `Text _Message`: the message to be translated. If translation is not found script displays this message.
	* `Integer _Duration`: duration of the message in miliseconds.
	* `Integer _Priority`: priority of the message.
	* *`CUIConfig::EUISound _Sound`*: sound of the message. If ignored message is silent.
	* *`Integer _SoundVariant`*: variant of the message sound. Ignore this, if you ignored `_Sound`.

##### SendStatusMessage (with composes)
* Extending Message library, displays status message with attached composes on player's UI.
* Parameters:
	* *`CPlayer _Player`*: the player to check his language. If ignored message is displayed to all players on the server.
	* `Text[] _Message`: array of text containing message and values to compose. First key is base message to translate, next are values to compose. If translation is not found script displays this message.
	* `Integer _Duration`: duration of the message in miliseconds.
	* `Integer _Priority`: priority of the message.
	* *`CUIConfig::EUISound _Sound`*: sound of the message. If ignored message is silent.
	* *`Integer _SoundVariant`*: variant of the message sound. Ignore this, if you ignored `_Sound`.
